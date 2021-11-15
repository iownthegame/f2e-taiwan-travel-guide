export default {
  data() {
    return {
      innerStyles: {},
      step: '',
      transitioning: false
    };
  },

  mounted() {
    if (this.cards.length <= 1) return;
    if (!this.$refs.inner) return;

    this.setStep();
    this.resetTranslate();
    this.onSlide('prev'); // Always start with the first item
  },

  computed: {
    translations() {
      return {
        next: `translateX(-${this.step}) translateX(-${this.step})`,
        prev: `translateX(${this.step}) translateX(-${this.step})`,
        reset: `translateX(-${this.step})`
      };
    }
  },

  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalCards = this.cards.length;
      this.step = `${innerWidth / totalCards}px`;
    },

    resetTranslate() {
      this.innerStyles = {
        transition: 'none',
        transform: this.translations.reset
      };
    },

    onSlide(action) {
      if (this.transitioning) return;

      this.transitioning = true;
      this.innerStyles = {
        transform: this.translations[action]
      };

      this.afterTransition(() => {
        this.updateCards(action);

        this.resetTranslate();
        this.transitioning = false;
      });
    },

    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener('transitionend', listener);
      };
      this.$refs.inner.addEventListener('transitionend', listener);
    },

    updateCards(action) {
      if (action === 'next') {
        this.cards.push(this.cards.shift());
      } else {
        this.cards.unshift(this.cards.pop());
      }
    }
  }
};

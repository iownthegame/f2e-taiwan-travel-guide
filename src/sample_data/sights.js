const activities = [
  {
    title: '合歡山國際暗空公園-星空清境跨年活動',
    description: '南投縣與各單位多年於合歡山舉辦清境高山跨年晚會活動，今年將活動主軸由傳統跨年晚會轉化成為台灣高山星空遊程之體驗活動，以剛通過美國IDA認證的華語區第一座國際暗空公園作為宣傳主題，在擁有東南的的...',
    location: '南投縣 仁愛鄉',
    image: 'https://s3-alpha-sig.figma.com/img/f480/3e6b/ba77830111ba99aaebcf10d642567955?Expires=1636934400&Signature=dCwD0XRaSzimL3kTaj-kokOSSvZqJEpK45MfzPojtlovNqEtK06hAN0xLzdus3ppd7w0pIJ7QhfnIJgY87g8UEi-2JYvqec0X5btkFQYlVP1A6jfe8ILJeUIRDg52Q2Sej-M6DIdpXzX6YRsy1q4j0aD9Sy3AdXL~~G31PKWNNzODZQl6GUv5nKl53gEibYlEcJ0PaX-PqVigAdB7P2ukrTYnD3XLop5cf4nG0DtqjG1LfOXFKFUFpZN4QbWVVKZbfRCWwxZTftuBm~SR5MT6yvbR4cUtQEKnle6b8JVLSTHQ4AzLaTWKWfRK3aR8sDwBT0ReKXKSCIVg~pyL3eg2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    title: '2021臺北燈節',
    description: '俗稱「小過年」的元宵節是源遠流長的傳統民俗節慶，臺北市政府自民國86年（西元1997年）辦理「臺北燈節」以來，歷經逾20年的蘊育及特色養成，成為民眾春節期間不可或缺的參觀去處，不僅將新年的歡慶氣...',
    location: '臺北市 萬華區',
    image: 'https://s3-alpha-sig.figma.com/img/b30a/426f/eb0f668c6f3a032252d48472750afc31?Expires=1636934400&Signature=h3HDkoiHuEtytffUb46irWc-fpke9Km~FOysthVph3jaJoMJw8Wit4HGarM396fJFTJ6~Kk4ioSsPZJOgC5U~ZkFFv1bmVoIwSwT18eu2xy6nhGymLZgGm6ESR5ATjRBVvN7o6KOUfM1dkiDR0JJl2Aje~I8WwxVO768YAtZXql6dhsDxE4k0kLDqY04L7p~e-vvjEw6IHZrH4-48YLbRTSygq0DlAMNOxAD~n7pLwHVy436Zg~hU12Rb-2OcFdrAflJ~u1-HZEoAXJw6j8p45ihBZ-Tf2JFRbtUj4bFwexys61oNuOG39tHnJQAL5t1Og3GMxTHd-AhB5cglsl2nA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    title: '2021陽明山花季',
    description: '南投縣與各單位多年於合歡山舉辦清境高山跨年晚會活動，今年將活動主軸由傳統跨年晚會轉化成為台灣高山星空遊程之體驗活動，以剛通過美國IDA認證的華語區第一座國際暗空公園作為宣傳主題，在擁有東南的的...',
    location: '臺北市 北投區',
    image: 'https://s3-alpha-sig.figma.com/img/160b/d211/2e5396ccbdc5bebdaf44b8b385a6fb91?Expires=1636934400&Signature=CbPtXeXaxI1mKbnh246wJfs3MfVDKfDffvze3SeYYbpW2r2QqsY01nO7Pml~Q9Qkg2cOfiLHBjaZpNVFAOrpNqWvOd5C6BiOYGrXIfuO8q8-I3KXtvqYRDd56Xid2nxZx-tQkeSFAMPn6o2zxvn-1~GqkYjRI0Oi8Gfz~tE0BPdxAWR3Y-Wvz46lb3F1Wfyq~o6wql-hqApMpKHSfltnKiIS0qIC~nEoJzbG8qA-6WlCOOMX8r~w0voMiKQWw5TXB7BcF~z~vfUawjJFip39G8A03pRlajM3NZXy~8hRGELlJhkDZLmur2tzujuknJwlq~2aI5BHLPEZcH3GF8Kdyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    title: '2021 TIFA台灣國際藝術節',
    description: 'TIFA台灣國際藝術節為台灣一年一度最重要的藝術節慶、亞洲最具亮點的藝文盛會。「T、I、F、A」以滿溢的藝術才華（Talent）、具創意啟發的內容（Inspiration）號召眾人共享這場藝術的...',
    location: '臺北市 中正區',
    image: 'https://s3-alpha-sig.figma.com/img/2c8e/c305/4bfe2fdc811bb647246dae97353690fa?Expires=1636934400&Signature=gUof-jKZ50uxZ274ae585dP6h84KYqYWyGGhJ1YRsmpzVXlgkUhbuXdKPKU5bXSyxYTP3RnRl8He66OTE-PMb~dV2THelL1VwbHQw9DlN6lLyo~NppaofaTImvgxTxw32B-06E0O96FiaAqFkjfCSNGp7guBovm3yox31PaVS6gcM9eIk7AeAr82t4NK5s8UEJtJ4gGr-cxTyuIHC5nuhoxlSkYn5SUsoVxgl3-PyqXW0fNQoKiSjLu65jD~WBWzAT0SDWbuycejMFYwe~hQCPlJz-~we2B0oqrqWXvmqXPOAeehbY1SO8h~7LquX~gxcvNnL5Es6dygFpGvxXYyrg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
]

const cities = [
  {
    location: '台北市',
    image: 'unsplash_qhu2nFWqVEU.png'
  },
  {
    location: '新北市',
    image: 'unsplash_WWUQyFn65ek.png'
  },
  {
    location: '桃園市',
    image: 'unsplash_0clJTXtgsIY.png'
  },
  {
    location: '新竹市',
    image: 'unsplash_XPWYOlfgUgw.png'
  },
  {
    location: '台  中',
    image: 'unsplash_D6Bk1A3-gMA.png'
  },
  {
    location: '南  投',
    image: 'unsplash_0gqcBEe2rv8.png'
  },
  {
    location: '嘉  義',
    image: 'unsplash_RpZxHPikR6A.png'
  },
  {
    location: '台  南',
    image: 'unsplash_zdV_Xh_nyu8.png'
  },
  {
    location: '高  雄',
    image: 'unsplash_5-GNa303REg.png'
  },
  {
    location: '屏  東',
    image: 'unsplash_Z95viY3WaZs.png'
  },
  {
    location: '宜  蘭',
    image: 'unsplash_qhu2nFWqVEU (1).png'
  },
  {
    location: '花  蓮',
    image: 'unsplash_U88iyzoZdlY.png'
  },
  {
    location: '台  東',
    image: 'unsplash_Dl_Ya8eNRpk.png'
  },
  {
    location: '金門馬祖.澎湖',
    image: 'unsplash_qhu2nFWqVEU (2).png'
  },
]

const restaurants = [
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0.png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (1).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (2).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (3).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (4).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (5).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (6).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (7).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (8).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (9).png',
  }
]

const rooms = [
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0.png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (1).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (2).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (3).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (4).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (5).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (6).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (7).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (8).png',
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    image: 'unsplash_F-lUB3k79z0 (9).png',
  }
]

export {
  activities,
  cities,
  restaurants,
  rooms
}

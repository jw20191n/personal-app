
const titles = [
    'Alipay',
    'Angular',
    'Ant Design',
    'Ant Design Pro',
    'Bootstrap',
    'React',
    'Vue',
    'Webpack',
  ];
  const avatars = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
    'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
    'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
    'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
  ];
  
  const covers = [
    'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
    'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
  ];
  const desc = [
    'é‚£æ˜¯ä¸€ç§å†…åœ¨çš„ä¸œè¥¿ï¼Œ ä»–ä»¬åˆ°è¾¾ä¸äº†ï¼Œä¹Ÿæ— æ³•è§¦åŠçš„',
    'å¸Œæœ›æ˜¯ä¸€ä¸ªå¥½ä¸œè¥¿ï¼Œä¹Ÿè®¸æ˜¯æœ€å¥½çš„ï¼Œå¥½ä¸œè¥¿æ˜¯ä¸ä¼šæ¶ˆäº¡çš„',
    'ç”Ÿå‘½å°±åƒä¸€ç›’å·§å…‹åŠ›ï¼Œç»“æžœå¾€å¾€å‡ºäººæ„æ–™',
    'åŸŽé•‡ä¸­æœ‰é‚£ä¹ˆå¤šçš„é…’é¦†ï¼Œå¥¹å´ååèµ°è¿›äº†æˆ‘çš„é…’é¦†',
    'é‚£æ—¶å€™æˆ‘åªä¼šæƒ³è‡ªå·±æƒ³è¦ä»€ä¹ˆï¼Œä»Žä¸æƒ³è‡ªå·±æ‹¥æœ‰ä»€ä¹ˆ',
  ];
  
  const user = [
    'ä»˜å°å°',
    'æ›²ä¸½ä¸½',
    'æž—ä¸œä¸œ',
    'å‘¨æ˜Ÿæ˜Ÿ',
    'å´åŠ å¥½',
    'æœ±åå³',
    'é±¼é…±',
    'ä¹å“¥',
    'è°­å°ä»ª',
    'ä»²å°¼',
  ];
  
  function fakeList(count) {
    const list = [];
    for (let i = 0; i < count; i += 1) {
      list.push({
        id: `fake-list-${i}`,
        owner: user[i % 10],
        title: titles[i % 8],
        avatar: avatars[i % 8],
        cover: parseInt(`${i / 4}`, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
        status: ['active', 'exception', 'normal'][i % 3],
        percent: Math.ceil(Math.random() * 50) + 50,
        logo: avatars[i % 8],
        href: 'https://ant.design',
        updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
        createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
        subDescription: desc[i % 5],
        description:
          'åœ¨ä¸­å°äº§å“çš„ç ”å‘è¿‡ç¨‹ä¸­ï¼Œä¼šå‡ºçŽ°ä¸åŒçš„è®¾è®¡è§„èŒƒå’Œå®žçŽ°æ–¹å¼ï¼Œä½†å…¶ä¸­å¾€å¾€å­˜åœ¨å¾ˆå¤šç±»ä¼¼çš„é¡µé¢å’Œç»„ä»¶ï¼Œè¿™äº›ç±»ä¼¼çš„ç»„ä»¶ä¼šè¢«æŠ½ç¦»æˆä¸€å¥—æ ‡å‡†è§„èŒƒã€‚',
        activeUser: Math.ceil(Math.random() * 100000) + 100000,
        newUser: Math.ceil(Math.random() * 1000) + 1000,
        star: Math.ceil(Math.random() * 100) + 100,
        like: Math.ceil(Math.random() * 100) + 100,
        message: Math.ceil(Math.random() * 10) + 10,
        content:
          'æ®µè½ç¤ºæ„ï¼šèš‚èšé‡‘æœè®¾è®¡å¹³å° ant.designï¼Œç”¨æœ€å°çš„å·¥ä½œé‡ï¼Œæ— ç¼æŽ¥å…¥èš‚èšé‡‘æœç”Ÿæ€ï¼Œæä¾›è·¨è¶Šè®¾è®¡ä¸Žå¼€å‘çš„ä½“éªŒè§£å†³æ–¹æ¡ˆã€‚èš‚èšé‡‘æœè®¾è®¡å¹³å° ant.designï¼Œç”¨æœ€å°çš„å·¥ä½œé‡ï¼Œæ— ç¼æŽ¥å…¥èš‚èšé‡‘æœç”Ÿæ€ï¼Œæä¾›è·¨è¶Šè®¾è®¡ä¸Žå¼€å‘çš„ä½“éªŒè§£å†³æ–¹æ¡ˆã€‚',
        members: [
          {
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
            name: 'æ›²ä¸½ä¸½',
            id: 'member1',
          },
          {
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
            name: 'çŽ‹æ˜­å›',
            id: 'member2',
          },
          {
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
            name: 'è‘£å¨œå¨œ',
            id: 'member3',
          },
        ],
      });
    }
  
    return list;
  }
  
  const currentUser = {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: 'Hey Yo I like milktea',
    title: 'supernova',
    group: 'unreadable',
    tags: [
      {
        key: '0',
        label: 'crazy fantasy',
      },
      {
        key: '1',
        label: 'happy new year',
      },
      {
        key: '2',
        label: 'so many labels',
      },
      {
        key: '3',
        label: 'meatlover',
      },
      {
        key: '4',
        label: 'makeup artist',
      },
      {
        key: '5',
        label: 'hahaha',
      },
    ],
    notice: [
      {
        id: 'xxx1',
        title: titles[0],
        logo: avatars[0],
        description: '科学搬砖组',
        updatedAt: new Date(),
        member: '科学搬砖组',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx2',
        title: titles[1],
        logo: avatars[1],
        description: '全组都是吴彦祖',
        updatedAt: new Date('2017-07-24'),
        member: '全组都是吴彦祖',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx3',
        title: titles[2],
        logo: avatars[2],
        description: '中二少女团',
        updatedAt: new Date(),
        member: '中二少女团',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx4',
        title: titles[3],
        logo: avatars[3],
        description: '程序员日常',
        updatedAt: new Date('2017-07-23'),
        member: '程序员日常',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx5',
        title: titles[4],
        logo: avatars[4],
        description: '高逼格设计天团',
        updatedAt: new Date('2017-07-23'),
        member: '高逼格设计天团',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx6',
        title: titles[5],
        logo: avatars[5],
        description: '骗你来学计算机',
        updatedAt: new Date('2017-07-23'),
        member: '骗你来学计算机',
        href: '',
        memberLink: '',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    geographic: {
      province: {
        label: '浙江省',
        key: '330000',
      },
      city: {
        label: '杭州市‚',
        key: '330100',
      },
    },
    address: 'è¥¿æ¹–åŒºå·¥ä¸“è·¯ 77 å·',
    phone: '0752-268888888',
  }
  
  export { currentUser, fakeList };
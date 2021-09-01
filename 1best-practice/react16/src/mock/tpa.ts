// import Mock from 'mockjs';

// export const demo =  Mock.mock('/demo','get',{
//     success: true,
//     message: '@cparagraph',
//     // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
//     'list|1-5': [{
//         // 属性 sid 是一个自增数，起始值为 1，每次增 1
//         'sid|+1': 1,
//         // 属性 userId 是一个5位的随机码
//         'userId|5': '',
//     }]
// })

// https://auth-cn2.huami.com/partnerApps/0010738901358628
const partnerAppsData = {
    appId: '0010738901358628',
    appType: 'WEB',
    displayName: '马拉马拉',
    packageId: 'com.smart_invest.marathonappforandroid;com.smart_invest.marathonappforandroid.demo',
    codeSignature: 'V7JGijssytMbfB94pzGThXqFGrM=;V7JGijssytMbfB94pzGThXqFGrM=',
    bundleId: 'com.maramara.app;com.maramara.appDemo',
    deviceType: 4,
    scopes: [
        {
            id: 'activities',
            name: '步数数据',
        },
        {
            id: 'heartrates',
            name: '心率数据',
        },
        {
            id: 'profile',
            name: '个人信息',
        },
        {
            id: 'sleep',
            name: '睡眠数据',
        },
        {
            id: 'sport',
            name: '运动数据',
        },
        {
            id: 'sportDetail',
            name: '运动详情数据',
        },
    ],
    sportTypes: `["OUTDOOR_RUN","DISTANCE_RUN","TIME_RUN","CALORIE_RUN","INTERVAL_RUN","WALKING","TRAILRUN","TREADMILL","OUTDOOR_CYCLING","INDOOR_CYCLING","SKIING","ELLIPTICL","MOUNTAINEER","INDOOR_SWIM","OPEN_WATER_SWIM","TRIATHLON"]`,
    status: 1,
    ttl: 31536000,
    description: '马拉马拉',
    icon:
        'https://cdn.awsbj0.fds.api.mi-img.com/huami-amazfit-production/1499841245_1MQLKSgLaMeG_ef555731f81ad2bf71ac2a8e33b69048.jpg?GalaxyAccessKeyId=5471745289726&Expires=316859841245000&Signature=0zamvnV4sQlXAK4PfbFePfg26bE=',
    redirectURIs:
        'http://user-gw.mararun.com/huami/token/notify,http://user-gw.test.mararun.com/huami/token/notify,https://huami-authorization-sdk-redirect-uri',
    homepageURL: 'http://www.mararun.com',
    showAuthorizationPage: 1,
    version: 3,
    startTime: 1501516800,
    stopTime: 1602115680,
    operationLimitConfig: `{"sendNotification":{"countLimit":100000, "failureLimit":100000, "averageLatencyLimit":10000}}`,
    enableNotificationIcon: false,
    notificationIconURIs: '',
    accessPolicy: '',
};

export default partnerAppsData;
// export default [
//     Mock.mock('http://localhost:3000/hmaccount/v3/partnerApps/', 'get', (options: any) => {
//         console.log(options);
//         return {
//             code: 200,
//             data: partnerAppsData,
//         };
//     }),
// ];

// export default [
//     {
//         url: '/partnerApps',
//         type: 'get',
//         response: config => {
//             return {
//                 code: 200,
//                 data: partnerAppsData
//             }
//         }
//     }
// ]

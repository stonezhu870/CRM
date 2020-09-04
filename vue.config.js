const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8888,
        proxy: /* [
            {
                context: ['/item', '/order', '/xboot'],
                target: 'http://192.168.0.56:8888',
            }
        ] */
        {
            '/xboot': {
                target: 'http://192.168.0.56:8888',
                ws: true,
            },
            '/admin': {
                target: 'https://crm.chinabidding.cn',
                ws: true,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/admin': '/admin'
                }
            },
            "/item": {
                target: 'http://192.168.0.56:8888',
                ws: true,
            },
            '/order-manager': {
                target: 'http://192.168.0.56:8888',
                ws: true,
            },
        }
    },
    // 打包时不生成.map文件 避免看到源码
    productionSourceMap: false,
    // 部署优化
    configureWebpack: {
        // 使用CDN
        externals: {
            vue: 'Vue',
            'vue-i18n': 'VueI18n',
            axios: 'axios',
            'vue-router': 'VueRouter',
            vuex: 'Vuex',
            'view-design': 'iview',
            echarts: 'echarts',
            apexcharts: 'ApexCharts',
            'vue-apexcharts': 'VueApexCharts',
            xlsx: 'XLSX',
            dplayer: 'DPlayer',
            'print-js': 'printJS',
            html2canvas: 'html2canvas',
            'vue-json-pretty': 'VueJsonPretty',
            'vue-lazyload': 'VueLazyload',
            gitalk: 'Gitalk',
            'js-cookie': 'Cookies',
            wangEditor: 'wangEditor',
            quill: 'Quill',
            stompjs: 'Stomp',
            'sockjs-client': 'SockJS',
            vuedraggable: 'vuedraggable',
            viewerjs: 'Viewer'
        },
        // GZIP压缩
        plugins: [
            new CompressionPlugin({
                test: /\.js$|\.html$|\.css/, // 匹配文件
                threshold: 10240 // 对超过10k文件压缩
            })
        ]
    }
}
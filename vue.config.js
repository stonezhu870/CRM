const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    // publicPath : "./",
    devServer: {
        host: '0.0.0.0',
        port: 7777,
        proxy:
        {
            '/xboot': {
                target: 'http://192.168.0.44:8888',
                // target: 'http://127.0.0.1:8888',
                ws: true,
            },
            '/osc': {
                target: 'http://192.168.0.44:8888',
                // target: 'http://127.0.0.1:8888',
                ws: true,
            },
            '/xmallend': {
                target: 'http://192.168.0.44:8888',
                // target: 'http://127.0.0.1:8888',
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
/**
 * 그동안 넥스트가 기본적으로 웹팩이나 바벨의 설정을 제공해줘서 그걸 이용했는데
 * 이제 우리는 그런걸 커스터마이징해야 패키지간에 덜 최적화된 부분이나 그런걸 해결할 수 있기 때문에 이런 작업을
 * 해준다.
 * 이건 넥스트에 대한 설정을 하는 파일이다.
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = withBundleAnalyzer({
  // next가 빌드되면 .next폴더에 빌드된것들이 저장되는데 이 디렉토리를 변경하고싶다면 distDir: 'build' 이런식으로 해주면된다.
  distDir: '.next',
  // 기본 넥스트에 웹팩 설정 하는 방법
  webpack(config) { // config에 넥스트의 기본 설정들이 들어있음
    console.log('config', config);
    console.log('rules', config.module.rules[0]);
    const isProd = process.env.NODE_ENV === 'production';
    const plugins = [
      ...config.plugins,
      // moment locale ko만 쓰는데 쓸뗴 없는것들 많아서 아래처럼 처리함
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
    ];
    if (isProd) {
      // 배포시엔 필수! 용량을 1/3으로 줄여준다. ex) main.js.gz
      // qmfkdnwjrk tjqjgksxp dycjdqhsofEo js파일말고 js.gz파일
      // 보내주면 브라우저가 그거 해독해서 다시 js파일로 만듬.
      // 같은기능이라도 용량을 줄여서 가져올 수 있기때문에 배포시에 꼭 압축해주는게 좋다.
      plugins.push(new CompressionPlugin());
    }
    // 리턴으로 웹팩설정 객체를 리턴해줘야함
    return {
      ...config,
      mode: isProd ? 'production' : 'development',
      // hidden-source-map: 소스코드 숨기면서 에러시 소스맵 제공
      // eval : 빠르게 웹팩 적용
      devtool: isProd ? 'hidden-source-map' : 'eval',
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            loader: 'webpack-ant-icon-loader',
            enforce: 'pre',
            include: [
              require.resolve('@ant-design/icons/lib/dist'),
            ],
          },
        ],
      },
      plugins,
    };
  },
});

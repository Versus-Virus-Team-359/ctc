const withFonts = require('next-fonts');
const withOffline = require('next-offline');
const withImages = require('next-images');

const nextConfig = {
	workboxOpts: {
		swDest: 'static/service-worker.js',
		runtimeCaching: [
			{
				urlPattern: /^https?.*/,
				handler: 'NetworkFirst',
				options: {
					cacheName: 'https-calls',
					networkTimeoutSeconds: 15,
					expiration: {
						maxEntries: 150,
						maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
					},
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			}
		]
	},
	reactStrictMode: true,
	experimental: {
		modern: true
	}
};

module.exports = withImages(withFonts(withOffline(nextConfig)));
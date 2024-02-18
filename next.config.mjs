/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'daisyui.com',
				port: '',
				pathname: '/images/stock/photo-1635805737707-575885ab0820.jpg',
			},
		],
	},
};

export default nextConfig;

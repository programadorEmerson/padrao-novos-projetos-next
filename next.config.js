module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://simple-system.vercel.app/:path*',
      },
    ];
  },
};

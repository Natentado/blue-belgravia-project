import path from 'path';

/**
 * @type {import('next').NextConfig}
*/

export const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
};

// module.exports = nextConfig
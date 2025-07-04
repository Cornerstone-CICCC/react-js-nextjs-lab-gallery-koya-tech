import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "via.placeholder.com",
                port: "",
                pathname: "**",
                search: "",
            },
            {
                protocol: "https",
                hostname: "placehold.co",
                port: "",
                pathname: "**",
                search: "",
            },
        ],
    },
};

export default nextConfig;

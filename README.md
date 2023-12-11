> [!NOTE]
> The example API does no authentication and will sign a playback token (JWT) for any playback ID given to it. You should add a layer of authentication if you're considering building on top of it for a production app.

This is a an example Next.js app demonstrating playing back signed video assets hosted by [Mux](https://www.mux.com).

You can clone the project and deploy it for quick testing using the button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmuxinc%2Fnextjs-backend-example&env=MUX_TOKEN_ID,MUX_TOKEN_SECRET,MUX_SIGNING_KEY,MUX_PRIVATE_KEY)

## Testing

After deploying and setting up environment variables, visit `/signed-playback` and input a playback ID that has a playback policy defined as "signed".

## Troubleshooting

Make sure that the asset you're attempting to play belongs to the same environment that the signing key has access to. Signing keys can only sign access tokens for videos that belong to the environment it has access to.

Below here is the standard Next.js readme.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

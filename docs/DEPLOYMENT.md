# Deployment state

## Current public Preview

- URL: `https://kv-konsult-site-git-redesign-k-1a3d30-henriks-projects-c5eb59d1.vercel.app`
- Branch: `redesign/kv-premium-vercel-preview`
- Status: visually rejected and not safe to show a client
- Search handling: Preview must remain noindex

## Gate 1

- Contains documentation, reference captures and isolated art-direction prototypes only.
- Does not replace application routes.
- Does not create a new Vercel deployment.
- A new Preview URL must not be reported until a direction is approved and Gate 2 has materially improved the rendered hero and navigation.

## Production safety

- Do not run `vercel --prod` or any production deployment command.
- Do not merge into master or another production branch.
- Do not assign `kvkonsult.com` to a redesign branch.
- Do not change DNS, Vercel Production Branch or production-domain protection.
- Do not remove Preview noindex.
- Do not force-push or delete branches.

## Future Preview requirement

After the appropriate implementation gate:

1. push only the redesign branch;
2. obtain a Vercel Preview deployment;
3. confirm environment is Preview, not Production;
4. verify the URL without Vercel login;
5. record branch, commit, public URL and production-safety confirmations.

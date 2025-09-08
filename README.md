This is a minimal npm package for react utility components.

If you have a suggestion or just want to help improve this package, your contributions are very welcome!

## Usage

### Main

The `Main` component is a wrapper for the `<main>` element with a mandatory `id` attribute. Always use it as the root component of your page, provide an `<h1>` element as a child, and direct children should typically be `<section>` with an `id` attribute including the `id` of the parent and the section name.

```tsx
import { Main } from "@mcsoud/react-ui";

export default function PageExample() {
  return (
    <Main id="example">
      <h1 hidden>Example</h1>
      <p>This is an example page.</p>
    </Main>
  );
}
```

### Modal

The `Modal` component is a wrapper for the `<dialog>` element with a mandatory `id` attribute. Modal ids are typesafe to toggle the modal state.

```tsx
import { Modal } from "@mcsoud/react-ui";

export default function PageExample() {
  return (
    <Modal id="example">
      <h2>Example</h2>
      <p>This is an example modal.</p>
    </Modal>
  );
}
```

To declare the modal ids, you should declare the modal ids in the `ModalsRegistration` interface.

```ts
declare module "@mcsoud/react-ui" {
  interface ModalsRegistration {
    modals: Modals;
  }
}
```

### Laravel Query

The `useLaravelQuery` hook is a wrapper for the `useQuery` hook from `@tanstack/react-query` with a few extra features.

```tsx
import { useLaravelQuery } from "@mcsoud/react-ui";

export default function PageExample() {
  const Display = useLaravelQuery({
    query, // Required, takes a useQuery hook from @tanstack/react-query
    toastError: "Something went wrong", // Optional
    toastSuccess: "Something went right", // Optional
  });
  return (
    <Display
      success={(data) => <p>Success: {data}</p>} // Required
      error={(err) => <p>Error: {err.response.data.message}</p>}
      loading={<p>Loading...</p>}
    />
  );
}
```

## Svgs

This package provides a few svg icons and socials.

### Loading

`<SvgLoading />`

### Close

`<SvgClose />`

### Contact

- `<SvgMail />`
- `<SvgLocation />`
- `<SvgPhone />`

### Socials

- `<SvgTwitterX />`
- `<SvgFacebook />`
- `<SvgInstagram />`
- `<SvgTikTok />`
- `<SvgWhatsapp />`
- `<SvgYoutube />`
- `<SvgApple />`
- `<SvgGooglePlay />`

### Icons

- `<SvgLink />`
- `<SvgEye />`
- `<SvgEyeOff />`

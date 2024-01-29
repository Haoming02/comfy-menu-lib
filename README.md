# Comfy Menu Lib.
A library that adds a sub-menu to [ComfyUI](https://github.com/comfyanonymous/ComfyUI)

## Notice
This library does nothing on its own. No need to install this manually as an end-user.

## For Developers
1. Clone this as a **sub-module** into your `WEB_DIRECTORY` folder
2. In your main Extension script, add:
    ```js
    import { registerMenu } from "./comfy-menu-lib/menu-lib.js";
    ```
3. Inside the `setup()` function, call:
    ```js
    const content = registerMenu("My Extension Name");
    ```
    - The parameter is the **name** of your Extension
        - Show up as a button in the nav menu *(14 characters limit)*
        - Show up as the title of the sub menu
        - Can contain spaces
4. This function returns a `div` with `flex` display
5. You can then append your own components under this `div`

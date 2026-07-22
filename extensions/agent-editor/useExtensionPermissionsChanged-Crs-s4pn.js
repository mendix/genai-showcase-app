import { r } from "./PageContainers-B4e_cfEm.js";
const o = ({
  studioPro: e,
  onPermissionsChanged: s
}) => {
  const n = r.useRef(s);
  n.current = s, r.useEffect(() => {
    const i = () => {
      n.current();
    };
    return e.ui.extensionPermissions.addEventListener("permissionsChanged", i), () => {
      e.ui.extensionPermissions.removeEventListener("permissionsChanged", i);
    };
  }, [e.ui.extensionPermissions]);
};
export {
  o as u
};

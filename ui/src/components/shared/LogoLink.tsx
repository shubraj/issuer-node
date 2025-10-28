import { Link } from "react-router-dom";

import { ROOT_PATH } from "src/utils/constants";

export function LogoLink() {
  return (
    <Link to={ROOT_PATH}>
      <img alt="PRUUF Logo" height={32} src="/images/pruuf-logo.png" width={120} />
    </Link>
  );
}

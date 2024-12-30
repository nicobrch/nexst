import { AppBreadcrumb } from "./app-breadcrumb";
import { SidebarTrigger } from "./ui/sidebar";

export function AppTopbar() {
  return (
    <div className="flex items-center space-x-4">
      <SidebarTrigger />
      <AppBreadcrumb />
    </div>
  );
}

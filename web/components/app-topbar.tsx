import { AppBreadcrumb } from "./app-breadcrumb";
import { SidebarTrigger } from "./ui/sidebar";

export function AppTopbar() {
  return (
    <div className="flex justify-between items-center p-4 space-x-4">
      <SidebarTrigger />
      <AppBreadcrumb />
    </div>
  );
}

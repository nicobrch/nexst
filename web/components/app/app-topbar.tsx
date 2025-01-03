import { AppBreadcrumb } from "@/components/app/app-breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppTopbar() {
  return (
    <div className="flex items-center space-x-4">
      <SidebarTrigger />
      <AppBreadcrumb />
    </div>
  );
}

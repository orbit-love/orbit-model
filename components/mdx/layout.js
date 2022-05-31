import PageLayout from "components/layouts/page_layout";
import Prose from "components/prose";

export default function Layout({ children }) {
  return (
    <PageLayout>
      <Prose>{children}</Prose>
    </PageLayout>
  );
}

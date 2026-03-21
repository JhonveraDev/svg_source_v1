import { Routes, Route, Navigate } from "react-router-dom";

import { HomePage, FavoritesPage, ApiDocsPage, ShadcnPage, ExtensionsListPage } from "../features";
import { Layout } from "../layout/index";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="category/:category" element={<HomePage />} />

        <Route path="docs">
          <Route index element={<Navigate to="api" replace />} />
          <Route path="api" element={<ApiDocsPage />} />
          <Route path="shadcn-ui" element={<ShadcnPage />} />
        </Route>
        
        <Route path="extensions" element={<ExtensionsListPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
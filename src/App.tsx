import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import ErrorBoundary from "@/components/ErrorBoundary";
import AppRoutes from "@/routes";
import { motion, pageVariants } from "@/animations";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <AppRoutes />
          <Toaster />
        </motion.div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

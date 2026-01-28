import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Toaster } from "./components/ui/toaster";
import {
  // Auth
  Login,
  Register,
  Onboarding,
  Privacy,
  // Dashboard
  Dashboard,
  // Jobs
  CreateJob,
  JobDetail,
  // Candidates
  Candidates,
  CandidateProfile,
  // Interviews
  Interviews,
  InterviewDetail,
  ScheduleInterview,
  // Reports
  Reports,
  InterviewPerformanceReport,
  CandidateSuccessReport,
  // Settings & Help
  Settings,
  Help,
  // Apply
  ApplyStart,
  ApplyDetails,
  ApplyRequirements,
  ApplyVideo,
  ApplyCv,
  ApplyReview,
  ApplyMobileApp,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* Apply Routes (Public) */}
        <Route path="/apply" element={<ApplyStart />} />
        <Route path="/apply/mobile" element={<ApplyMobileApp />} />
        <Route path="/apply/details" element={<ApplyDetails />} />
        <Route path="/apply/requirements" element={<ApplyRequirements />} />
        <Route path="/apply/video" element={<ApplyVideo />} />
        <Route path="/apply/cv" element={<ApplyCv />} />
        <Route path="/apply/review" element={<ApplyReview />} />

        {/* Protected Routes with MainLayout */}
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        {/* Jobs */}
        <Route
          path="/create-job"
          element={
            <MainLayout>
              <CreateJob />
            </MainLayout>
          }
        />
        <Route
          path="/jobs/:id"
          element={
            <MainLayout>
              <JobDetail />
            </MainLayout>
          }
        />

        {/* Candidates */}
        <Route
          path="/candidates"
          element={
            <MainLayout>
              <Candidates />
            </MainLayout>
          }
        />
        <Route
          path="/candidates/profile"
          element={
            <MainLayout>
              <CandidateProfile />
            </MainLayout>
          }
        />
        <Route
          path="/candidates/:id"
          element={
            <MainLayout>
              <CandidateProfile />
            </MainLayout>
          }
        />

        {/* Interviews */}
        <Route
          path="/interviews"
          element={
            <MainLayout>
              <Interviews />
            </MainLayout>
          }
        />
        <Route
          path="/interviews/schedule"
          element={
            <MainLayout>
              <ScheduleInterview />
            </MainLayout>
          }
        />
        <Route
          path="/interviews/:id"
          element={
            <MainLayout>
              <InterviewDetail />
            </MainLayout>
          }
        />

        {/* Reports */}
        <Route
          path="/reports"
          element={
            <MainLayout>
              <Reports />
            </MainLayout>
          }
        />
        <Route
          path="/reports/interview-performance"
          element={
            <MainLayout>
              <InterviewPerformanceReport />
            </MainLayout>
          }
        />
        <Route
          path="/reports/candidate-success"
          element={
            <MainLayout>
              <CandidateSuccessReport />
            </MainLayout>
          }
        />

        {/* Settings & Help */}
        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />
        <Route
          path="/help"
          element={
            <MainLayout>
              <Help />
            </MainLayout>
          }
        />
        <Route
          path="/help/faq"
          element={
            <MainLayout>
              <Help />
            </MainLayout>
          }
        />
        <Route
          path="/help/guides"
          element={
            <MainLayout>
              <Help />
            </MainLayout>
          }
        />

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;

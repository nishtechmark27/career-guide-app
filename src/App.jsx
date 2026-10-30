import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { PhoneFrame } from './components/PhoneFrame';

// Screens
import { SplashScreen } from './screens/SplashScreen';
import { LoginScreen } from './screens/LoginScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { ForgotPasswordScreen } from './screens/ForgotPasswordScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { CareerExplorerScreen } from './screens/CareerExplorerScreen';
import { CareerDetailsScreen } from './screens/CareerDetailsScreen';
import { CareerRoadmapScreen } from './screens/CareerRoadmapScreen';
import { TestListScreen } from './screens/TestListScreen';
import { AptitudeTestScreen } from './screens/AptitudeTestScreen';
import { TestResultScreen } from './screens/TestResultScreen';
import { OpportunitiesScreen } from './screens/OpportunitiesScreen';
import { CourseDetailsScreen } from './screens/CourseDetailsScreen';
import { ScholarshipDetailsScreen } from './screens/ScholarshipDetailsScreen';
import { JobDetailsScreen } from './screens/JobDetailsScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { ProfileScreen } from './screens/ProfileScreen';

const ScreenRouter = () => {
  const { currentScreen } = useApp();

  switch (currentScreen) {
    case 'splash':
      return <SplashScreen />;
    case 'login':
      return <LoginScreen />;
    case 'register':
      return <RegisterScreen />;
    case 'forgot-password':
      return <ForgotPasswordScreen />;
    case 'dashboard':
      return <DashboardScreen />;
    case 'careers':
      return <CareerExplorerScreen />;
    case 'career-details':
      return <CareerDetailsScreen />;
    case 'roadmap':
      return <CareerRoadmapScreen />;
    case 'tests':
      return <TestListScreen />;
    case 'aptitude-quiz':
      return <AptitudeTestScreen />;
    case 'test-result':
      return <TestResultScreen />;
    case 'opportunities':
      return <OpportunitiesScreen />;
    case 'course-details':
      return <CourseDetailsScreen />;
    case 'scholarship-details':
      return <ScholarshipDetailsScreen />;
    case 'job-details':
      return <JobDetailsScreen />;
    case 'notifications':
      return <NotificationsScreen />;
    case 'profile':
      return <ProfileScreen />;
    default:
      return <DashboardScreen />;
  }
};

export default function App() {
  return (
    <AppProvider>
      <PhoneFrame>
        <ScreenRouter />
      </PhoneFrame>
    </AppProvider>
  );
}

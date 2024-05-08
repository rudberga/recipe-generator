import type { User } from '@supabase/supabase-js';

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return <h1>Hello, {user.email || 'user'}!</h1>;
};

export default UserProfile;

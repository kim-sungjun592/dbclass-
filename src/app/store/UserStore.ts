import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserStore = {
	accessToken: string | null;
	user: {
		id: number;
		name: string;
	} | null;

	setUser: (user: UserStore['user']) => void;
	setAccessToken: (token: string) => void;
};

export const useUserStore = create<UserStore>()(
	persist(
		(set) => ({
			accessToken: null,
			user: null,
			setUser: (user) => set({ user }),
			setAccessToken: (accessToken) => set({ accessToken }),
		}),
		{
			name: 'user-storage',
		}
	)
);

interface ResponsiveData {
  isMovil: boolean;
  winSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export interface Action {
  type: string;
  payload: boolean | string | ResponsiveData;
}

export interface ReducerState {
  isMovil: boolean;
  winSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  isLoading: boolean;
  currentPath: string;
  currentParams: string;
}
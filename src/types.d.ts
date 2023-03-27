enum Theme {
  Light = "Light",
  Dark = "Dark",
  System = "System",
}

type ThemeState = {
  theme: Theme;
  icon: any;
};

export { ThemeState, Theme };

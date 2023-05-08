declare module '@carbon/icons-vue/*' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@privyid/persona-icon/svg/*' {
  const url: string

  export default url
}

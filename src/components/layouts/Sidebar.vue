<template>
  <p-sidebar-menu
    v-model="model"
    :menus="menus"
    fixed
    toggleable="lg">
    <p-sidebar-brand>
      <p-caption
        weight="bold"
        transform="capitalize">
        Account
      </p-caption>
      <div class="space-y-4 sidebar__brand__account">
        <p-dropdown>
          <template #button-content>
            <p-truncate
              :text="currentAccount.text"
              length="20"
              :tooltip="false" />
          </template>
          <template
            v-for="(account, idx) in enterprise"
            :key="idx">
            <p-subheading
              overline
              weight="medium"
              class="px-4 pt-3 pb-1">
              {{ account.title }}
            </p-subheading>
            <template
              v-for="(user, i) in account.item"
              :key="i">
              <p-dropdown-item @click="switchAccount(user)">
                <span class="flex items-center space-x-2">
                  <span>{{ user.text }}</span>
                  <p-dot
                    v-if="currentAccount.value === user.value"
                    color="info" />
                </span>
              </p-dropdown-item>
            </template>
            <p-divider />
          </template>
        </p-dropdown>
      </div>
    </p-sidebar-brand>
    <template #bottom>
      <div>
        <LayoutsSidebarBalance />
      </div>
    </template>
  </p-sidebar-menu>
</template>

<script lang="ts" setup>
import menus from '~/menu'
import { toast } from '@privyid/persona/core'
import { type Account } from '~/api/user'
import { computed, ref } from 'vue'
import LayoutsSidebarBalance from '../layouts/SidebarBalance.vue'

const props = defineProps({ modelValue: { type: Boolean, default: false } })
const emit  = defineEmits(['update:modelValue'])

const model = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  },
})

/**
 * Personal/Enterprise Account
 */
const enterprise = ref([
  {
    title: 'Personal',
    item : [
      {
        text : 'Jane Saliman Rasih',
        value: 1,
      },
    ],
  },
  {
    title: 'Enterprise',
    item : [
      {
        text : 'PT Privy Identitas Digital',
        value: 2,
      },
      {
        text : 'PT Privy (Demo purpose)',
        value: 3,
      },
    ],
  },
])

const currentAccount = ref<Account>({
  text : 'Jane Saliman Rasih',
  value: 1,
})

function switchAccount (account: Account): void {
  currentAccount.value = account

  toast({
    type : 'success',
    title: 'Switch Account',
    text : `You are successfully to switch on ${account.text} account`,
  })
}

</script>

<style lang="postcss">
.sidebar {
  --p-sidebar-bg: theme(backgroundColor.default.DEFAULT);
  --p-sidebar-bg-dark: theme(backgroundColor.dark.default.DEFAULT);
  --p-sidebar-size-wide: 285px;
  --p-sidebar-padding-x: theme(spacing.0);
  --p-sidebar-padding-bottom: theme(spacing.0);

  @apply pt-16;

  &&--fixed {
    @apply shadow-none overflow-hidden border-r border-r-subtlest;
    @apply dark:border-r-dark-subtlest;

    .sidebar__menus {
      @apply flex-grow overflow-y-auto overflow-x-hidden px-7 overscroll-contain;
    }

    .sidebar__title {
      @apply z-0;
    }

    .sidebar__bottom {
      @apply flex-shrink-0;
      @apply bg-default w-[var(--p-sidebar-size-wide)] px-7 py-5 border-t border-r border-t-subtlest border-r-subtlest;
      @apply dark:bg-dark-default dark:border-t-dark-subtlest dark:border-r-dark-subtlest;

      .caption {
        @apply text-subtle mb-4 ml-3;
        @apply dark:text-dark-subtle;
      }
      .card {
        @apply border-transparent bg-default;
        @apply dark:bg-dark-default;
      }
    }

    &.sidebar--toggleable {
      &:where(&&-all, &&-lg, &&-md, &&-sm) {
        &:is(.sidebar--show) {
          .sidebar__bottom {
            @apply left-0 transition-[left] ease-out delay-75;
          }
        }
      }

      &:where(&&-all, &&-lg, &&-md, &&-sm) {
        .sidebar__bottom {
          @apply -left-[100%] transition-[left] ease-in delay-75;
        }
      }

      &&-lg {
        .sidebar__bottom {
          @apply lg:left-0;
        }
      }

      &&-md {
        .sidebar__bottom {
          @apply md:left-0;
        }
      }

      &&-sm {
        .sidebar__bottom {
          @apply sm:left-0;
        }
      }
    }
  }

  &__brand {
    --p-sidebar-brand-z-index: calc(theme(zIndex.fixed) + 1);

    @apply text-left z-[var(--p-sidebar-brand-z-index)] font-normal bg-default pt-7;
    @apply dark:bg-dark-default;

    .sidebar--wide & {
      @apply px-7;
    }

    .caption {
      @apply text-subtle pl-3 pb-3;
      @apply dark:text-dark-subtle;
    }

    &__account {
      @apply ml-0 gap-x-0 w-full;

      .dropdown,
      input {
        @apply w-full;

        .btn.btn--default {
          @apply w-full;
        }
      }

      input {
        @apply flex;
      }
    }

    .divider {
      @apply last:hidden;
    }
  }

  .nav {
    &.nav--pills {
      .router-link-active:not(.nav__link--disabled),
      .router-link-exact-active:not(.nav__link--disabled) {
        @apply relative after:content-[''] after:h-[30px] after:w-[3px] after:absolute after:-left-[1px] after:inset-y-[7px] after:bg-info-emphasis after:rounded-r-tn bg-default-alpha rounded-b;
        @apply dark:after:bg-dark-info-emphasis dark:bg-dark-default-alpha;
      }
    }
  }
}
</style>

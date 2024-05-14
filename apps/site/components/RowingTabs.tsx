import { getBashCommand } from '@lib/getBashCommand'
import { useLocalStorageWatcher } from '@lib/useLocalStorageWatcher'
import { useEffect, useState } from 'react'
import type { TabLayout, TabsTabProps, ViewProps } from 'tamagui'
import { Avatar, SizableText, XStack, styled } from 'tamagui'
import { AnimatePresence, Tabs, YStack } from 'tamagui'
import { Code } from './Code'

export function RowingTabs({ className, onTabChange, children, size, ...rest }) {
  const {
    isStarter,
    isPackageRunner,
    showTabs,
    defaultTab,
    getTabKey,
    command,
    handleTabChange,
  } = getBashCommand(children, className)

  const [tabState, setTabState] = useState<{
    currentTab: string
    // Layout of the Tab user might intend to select (hovering / focusing)
    intentAt: TabLayout | null
    // Layout of the Tab user selected
    activeAt: TabLayout | null
    // Used to get the direction of activation for animating the active indicator
    prevActiveAt: TabLayout | null
  }>({
    currentTab: defaultTab,
    intentAt: null,
    activeAt: null,
    prevActiveAt: null,
  })

  const { storageItem, setItem } = useLocalStorageWatcher(
    getTabKey(),
    tabState.currentTab
  )

  useEffect(() => {
    const storedTab = localStorage.getItem(getTabKey())
    handleTabChange(storedTab ?? tabState.currentTab)
    onTabChange(storedTab)
  }, [])

  const setCurrentTab = (currentTab: string) => {
    setTabState({ ...tabState, currentTab })
    onTabChange(currentTab)
    handleTabChange(currentTab)
    setItem(currentTab)
  }

  const setIntentIndicator = (intentAt) => setTabState({ ...tabState, intentAt })
  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt })

  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState

  // 1 = right, 0 = nowhere, -1 = left
  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0
    }
    return activeAt.x > prevActiveAt.x ? -1 : 1
  })()

  const handleOnInteraction: TabsTabProps['onInteraction'] = (type, layout) => {
    if (type === 'select') {
      setActiveIndicator(layout)
    } else {
      setIntentIndicator(layout)
    }
  }

  return (
    <>
      {showTabs ? (
        <Tabs
          activationMode="manual"
          orientation="horizontal"
          size="$4"
          br="$4"
          value={storageItem}
          onPress={(e) => e.stopPropagation()}
          onValueChange={setCurrentTab}
          group
          mt={1}
        >
          <YStack w="100%">
            <YStack p="$1.5" m="$2" mb={0} br="$5">
              <AnimatePresence initial={false}>
                {intentAt && (
                  <TabIndicator
                    w={intentAt.width}
                    h={intentAt.height}
                    x={intentAt.x}
                    y={intentAt.y}
                  />
                )}
              </AnimatePresence>

              <AnimatePresence initial={false}>
                {activeAt && (
                  <TabIndicator
                    theme="active"
                    w={activeAt.width}
                    h={activeAt.height}
                    x={activeAt.x}
                    y={activeAt.y}
                  />
                )}
              </AnimatePresence>

              <Tabs.List
                disablePassBorderRadius
                loop={false}
                aria-label="package manager"
                gap="$2"
              >
                {isStarter ? (
                  <Tab
                    active={storageItem === 'npm'}
                    pkgManager="npm"
                    onInteraction={handleOnInteraction}
                  />
                ) : isPackageRunner ? (
                  <>
                    <Tab
                      active={storageItem === 'npx'}
                      pkgManager="npx"
                      logo="npm"
                      onInteraction={handleOnInteraction}
                    />
                    <Tab
                      active={storageItem === 'bunx'}
                      pkgManager="bunx"
                      logo="bun"
                      onInteraction={handleOnInteraction}
                    />
                  </>
                ) : (
                  <>
                    <Tab
                      active={storageItem === 'yarn'}
                      pkgManager="yarn"
                      onInteraction={handleOnInteraction}
                    />
                    <Tab
                      active={storageItem === 'bun'}
                      pkgManager="bun"
                      onInteraction={handleOnInteraction}
                    />
                    <Tab
                      active={storageItem === 'npm'}
                      pkgManager="npm"
                      onInteraction={handleOnInteraction}
                    />
                    <Tab
                      active={storageItem === 'pnpm'}
                      pkgManager="pnpm"
                      onInteraction={handleOnInteraction}
                    />
                  </>
                )}
              </Tabs.List>
            </YStack>

            {/* <AnimatePresence exitBeforeEnter custom={{ direction }} initial={false}> */}
            {/* <AnimatedYStack key={currentTab}> */}
            <Tabs.Content value={currentTab} forceMount>
              <Code
                p="$4"
                backgroundColor="transparent"
                f={1}
                className={className}
                size={size ?? '$5'}
                lineHeight={size ?? '$5'}
                {...rest}
              >
                {command}
              </Code>
            </Tabs.Content>
            {/* </AnimatedYStack> */}
            {/* </AnimatePresence> */}
          </YStack>
        </Tabs>
      ) : (
        children
      )}
    </>
  )
}

function Tab({
  active,
  pkgManager,
  logo,
  onInteraction,
}: {
  active?: boolean
  pkgManager: string
  logo?: string
  onInteraction: TabsTabProps['onInteraction']
}) {
  const imageName = logo ?? pkgManager
  return (
    <Tabs.Tab
      unstyled
      pl="$2"
      pr="$2.5"
      py="$1.5"
      gap="$1.5"
      value={pkgManager}
      onInteraction={onInteraction}
    >
      <XStack gap="$1.5" ai="center" jc="center">
        <Avatar
          style={{
            filter: active ? '' : 'grayscale(100%)',
          }}
          size="$1"
          br="$2"
        >
          <Avatar.Image
            scale={imageName === 'pnpm' ? 0.7 : 0.8}
            y={imageName === 'pnpm' ? 0 : 0}
            src={`/logos/${imageName}.svg`}
          />
          <Avatar.Fallback bg="$color6" bc="$color8" />
        </Avatar>
        <SizableText
          y={-0.5}
          size="$2"
          col={active ? '$color11' : '$color9'}
          o={active ? 1 : 0.5}
        >
          {pkgManager}
        </SizableText>
      </XStack>
    </Tabs.Tab>
  )
}

function TabIndicator({ active, ...props }: { active?: boolean } & ViewProps) {
  return (
    <YStack
      pos="absolute"
      bg="$color5"
      o={0.7}
      br="$4"
      animation="quickest"
      enterStyle={{
        o: 0,
      }}
      exitStyle={{
        o: 0,
      }}
      {...(active && {
        bg: '$color8',
        o: 0.6,
      })}
      {...props}
    />
  )
}

const AnimatedYStack = styled(YStack, {
  f: 1,
  x: 0,
  o: 1,

  animation: '100ms',
  variants: {
    // 1 = right, 0 = nowhere, -1 = left
    direction: {
      ':number': (direction) => ({
        enterStyle: {
          x: direction > 0 ? -10 : -10,
          opacity: 0,
        },
        exitStyle: {
          zIndex: 0,
          x: direction < 0 ? -10 : -10,
          opacity: 0,
        },
      }),
    },
  } as const,
})

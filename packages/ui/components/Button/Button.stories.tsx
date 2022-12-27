import Button from '.'
import { AiFillAndroid, AiFillHome } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { BsFillPlayFill } from 'react-icons/bs'

export const Variants = () => {
  return (
    <>
      <div className="flex gap-x-4 flex-wrap">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="destructive">Desctructive Button</Button>
        <Button variant="transparent">Transparent Button</Button>
      </div>
      <div className="flex items-center gap-x-2 mt-10 flex-wrap">
        <Button size="sm">Small</Button>
        <Button variant="secondary">Medium</Button>
        <Button
          size="lg"
          variant="destructive"
        >
          Large
        </Button>
        <Button size="xl">Extra Large</Button>
      </div>

      <div className="flex flex-col gap-y-2 mt-10 flex-wrap">
        <div className="w-full">
          <Button fullWidth>Full Width</Button>
          <Button className="mt-3">Auto</Button>
        </div>
      </div>
      <div className="flex gap-x-4 mt-10 flex-wrap">
        <Button isDisabled>Primary Button</Button>
        <Button
          isDisabled
          variant="secondary"
        >
          Secondary Disabled
        </Button>
        <Button
          isDisabled
          variant="destructive"
        >
          Desctructive Disabled
        </Button>
        <Button
          isDisabled
          variant="transparent"
        >
          Transparent Disabled
        </Button>
      </div>

      <div className="flex gap-x-4 mt-10 flex-wrap">
        <Button isLoading>Loading Left</Button>
        <Button
          loadingPosition="right"
          isLoading
          variant="secondary"
        >
          Loading Right
        </Button>
        <Button
          className="mt-5"
          loadingPosition="right"
          isLoading
          variant="destructive"
          fullWidth
        >
          Loading Right
        </Button>
        <Button
          className="mt-5"
          loadingPosition="right"
          isLoading
          variant="destructive"
          fullWidth
          isDisabled
        >
          Loading Right
        </Button>
      </div>

      <div className="flex gap-x-4 flex-wrap mt-10 items-center">
        <Button
          size="sm"
          icon={BsFillPlayFill}
        >
          Primary Button
        </Button>
        <Button
          icon={FiSettings}
          variant="secondary"
        >
          Secondary Button
        </Button>
        <Button
          size="lg"
          icon={AiFillHome}
          variant="destructive"
        >
          Desctructive Button
        </Button>
        <Button
          size="xl"
          icon={AiFillAndroid}
          variant="transparent"
        >
          Transparent Button
        </Button>
      </div>

      <div className="flex gap-x-4 flex-wrap mt-10 items-center">
        <Button
          size="sm"
          icon={BsFillPlayFill}
          iconPosition="right"
        >
          Primary Button
        </Button>
        <Button
          isDisabled
          isLoading
          size="sm"
          icon={BsFillPlayFill}
          iconPosition="right"
          loadingPosition="right"
        >
          Primary Button
        </Button>
        <Button
          icon={FiSettings}
          iconPosition="right"
          variant="secondary"
        >
          Secondary Button
        </Button>
        <Button
          size="lg"
          icon={AiFillHome}
          iconPosition="right"
          variant="destructive"
        >
          Desctructive Button
        </Button>
        <Button
          size="xl"
          icon={AiFillAndroid}
          iconPosition="right"
          variant="transparent"
        >
          Transparent Button
        </Button>
      </div>
    </>
  )
}

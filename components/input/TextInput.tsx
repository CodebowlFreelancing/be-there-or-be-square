import { ComponentPropsWithRef } from 'react'
import { Input } from './Input'

type TextInputProps = Omit<ComponentPropsWithRef<typeof Input>, 'type'>

export const TextInput = (props: TextInputProps) => <Input type="text" {...props} />

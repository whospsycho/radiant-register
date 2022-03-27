import { Text, Space, Center, Group, TextInput, PasswordInput, Button, Container } from '@mantine/core'
import { useModals } from '@mantine/modals';
import { useNotifications } from '@mantine/notifications';
import { X, Check, Mail, Key, User, Tag } from 'tabler-icons-react'
import register from '../auth/register'



export default function registerPage() {
  const modals = useModals();
  const notifications = useNotifications();
  const openRegisterModal = () => {
    const id = modals.openModal({
      title: 'Register',
      centered: true,
      children: (
        <>
          <form onSubmit={

            (e) => {
              e.preventDefault();
              const e_target = e.target;
              //@ts-ignore
              const email = e_target.email.value;
              //@ts-ignore
              const password = e_target.password.value;
              //@ts-ignore
              const invite = e_target.invite.value;
              //@ts-ignore
              const confirmPassword = e_target.confirmPassword.value;

              if (password !== confirmPassword) {
                notifications.showNotification({
                  title: 'Error',
                  message: 'Passwords do not match',
                  color: 'red',
                  autoClose: 2500,

                  icon: <X />
                });
              }

              register(email, password, invite).then((res: any) => {
                if (res.error) {
                  notifications.showNotification({
                    title: 'Error',
                    message: res.error,
                    color: 'red',
                    autoClose: 2500,

                    icon: <X />
                  });
                } else {
                  notifications.showNotification({
                    title: 'Success',
                    message: res.message,
                    color: 'green',
                    autoClose: 2500,

                    icon: <Check />

                  }
                  )
                }
              })
            }}>

            <Space h={16} />
            <TextInput
              icon={<Mail size={16} />}
              placeholder="Email"
              id="email"
              styles={{
                input: { "&:focus": { borderColor: "#3b5bdb !important" }, "&:focus-within": { borderColor: "#3b5bdb !important" } }
              }}

            />
            <Space h={16} />
            <PasswordInput
              placeholder="Password"
              icon={<Key size={16} />}
              id="password"
              toggleTabIndex={0}
              styles={{
                input: { "&:focus": { borderColor: "#3b5bdb !important" }, "&:focus-within": { borderColor: "#3b5bdb !important" } }
              }}
            />
            <Space h={16} />
            <PasswordInput
              placeholder="Confirm Password"
              icon={<Key size={16} />}
              id="confirmPassword"
              toggleTabIndex={0}
              styles={{
                input: { "&:focus": { borderColor: "#3b5bdb !important" }, "&:focus-within": { borderColor: "#3b5bdb !important" } }
              }}
            />

            <Space h={16} />
            <TextInput
              placeholder="Invite Code"
              icon={<Tag size={16} />}
              id="invite"
              styles={{
                input: { "&:focus": { borderColor: "#3b5bdb !important" }, "&:focus-within": { borderColor: "#3b5bdb !important" } }
              }}
            />
            <Space h={16} />

            <Button fullWidth onClick={() => modals.closeModal(id)} color="indigo" style={{ marginTop: "8px" }} type="submit">
              Register
            </Button>
          </form>

        </>

      ),
    });
  };

  return (
    <>
      <Container>
        <Center style={{ height: '100vh' }}>
          <Group direction="column" position="center">
            {/* @ts-ignore */}
            <Text size="xxl" weight={700}>
              radiant.cool
            </Text>

            <Button onClick={openRegisterModal} color="indigo" fullWidth>
              Register
            </Button>
          </Group>

        </Center>
      </Container>


    </>
  )
}


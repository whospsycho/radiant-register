import { Text, Space, Center, Group, TextInput, PasswordInput, Button, Container, NativeSelect } from '@mantine/core'
import { useModals } from '@mantine/modals';
import { useNotifications } from '@mantine/notifications';
import { X, Check, Mail, Key, User, Tag, At } from 'tabler-icons-react'
import register from '../auth/register'



export default function registerPage() {
  const domains = ["@radiant.cool", "@shiba.bar", "@floppa.email", "@catgirls.work", "@otters.shop", "@webmail.surf", "@skeeet.cc", "@catgirls.digital", "@bigfloppa.monster", "@lean.monster ", "@cope.wtf", "@hypixel.pro", "@my-balls-it.ch", "@allah.agency", "@thighs.media", "@monke.party", "@femboy.media", "@floppa-is.art", "@floppa.company", "@floppa.digital", "@fortnite.bar", "@fakenitro.store", "@crisium.one", "@shibeclub.tech", "@shibe-in.space", "@lunarclient.site", "@cock.red", "@indianscammer.email", "@badlionclient.info", "@fart.host", "@grabify.website", "@scamming.email", "@femboys.email", "@rapist.email", "@ching-chong-wing.wang", "@e-z.email"]
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
              // @ts-ignore
              const domain = e_target.domain.value;

              if (password !== confirmPassword) {
                notifications.showNotification({
                  title: 'Error',
                  message: 'Passwords do not match',
                  color: 'red',
                  autoClose: 2500,

                  icon: <X />
                });
              }

              register(email, password, invite, domain).then((res: any) => {
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

            <Group direction="row" align="left" grow={true}>
              <TextInput
                icon={<Mail size={16} />}
                placeholder="Email"
                id="email"
                styles={{
                  input: { "&:focus": { borderColor: "#3b5bdb !important" }, "&:focus-within": { borderColor: "#3b5bdb !important" } }
                }}

              />
              <NativeSelect
                data={domains}
                placeholder="Domain"
                id="domain"
                required
              />





            </Group>





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


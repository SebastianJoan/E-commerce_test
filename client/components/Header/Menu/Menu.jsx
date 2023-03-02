
    import { Container, Menu, Grid, Icon, Label } from 'semantic-ui-react'
    import Link from 'next/link'

    export default function MenuWeb() {
      return (
        <div className='menu'>
            <Container>
              <Grid>
                <Grid.Column className='menu__left' width={6}>
                  <MenuPlatform/>
                </Grid.Column>
                <Grid.Column className='menu__right' width={10}>
                  <MenuOptions/>
                </Grid.Column>
              </Grid>
            </Container>
        </div>
      )
    }
    
    function MenuPlatform(){
      return (
        <Menu>
          <Link href='/xbox'>
            <Menu.Item>
              Xbox
            </Menu.Item>
          </Link>
          <Link href='/PlayStation'>
            <Menu.Item>
              PlayStation
            </Menu.Item>
          </Link>
          <Link href='/Nintendo'>
            <Menu.Item>
              Nintendo
            </Menu.Item>
          </Link>
        </Menu>
      )
    }

    function MenuOptions(){
      return(
        <Menu>
          <Menu.Item>
            <Icon name='user outline'/>
              Mi Cuenta
          </Menu.Item>
        </Menu>
      )
    }
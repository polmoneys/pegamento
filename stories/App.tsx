import { Fragment } from 'react'
import V1 from '../package/src'
import Demo from './story'
import { Unit } from '../package/src/types'
import '../package/src/index.css'

import './App.css'

function App(): JSX.Element {
  return (
    <Fragment>
      <header>
        <Demo.Disclosure
          popper
          id="test-disclosure"
          label={open => <Demo.DisclosureTrigger open={open} />}
          className="disclosure"
        >
          <div className="disclosure-popper">
            <p> Glue for your layouts and interfaces</p>
            <p>
              <a href="https://github.com/polmoneys/pegamento">Github</a>{' '}
              repository
            </p>
          </div>
        </Demo.Disclosure>
      </header>
      <Demo.Spacing />
      <main>
        <V1.Row as="div">
          <V1.Dos as="div" DANGEROUS={{ width: '54px' }} gap="1em">
            <Demo.Icon />
            <p className="pill">React</p>
          </V1.Dos>
          <V1.Dos as="div" gap="1em" data-flex-grow="">
            <Demo.Icon />
            <p className="pill">React</p>
          </V1.Dos>

          <V1.Stack
            as="div"
            data-place-content="center"
            data-place-items="center"
          >
            <Demo.Icon />
            <p className="pill">React</p>
          </V1.Stack>
        </V1.Row>

        <Demo.Spacing />

        <V1.Grid as="div" size="400px" gap="2em">
          <V1.Grid
            as="div"
            border="outset"
            gridTemplateColumns="48px 1fr 48px"
            direction="x"
            items={[
              {
                color: '#ddd',
                name: 'prefix',
                stop: ['0px', '48px'] as [Unit, Unit],
              },
              {
                color: 'transparent',
                name: 'main',
                stop: ['48px', 'calc(100% - 48px)'] as [Unit, Unit],
              },
              {
                color: '#eee',
                name: 'sufix',
                stop: ['calc(100% - 48px)', '100%'] as [Unit, Unit],
              },
            ]}
          >
            <V1.Grid as="div" data-place-content="center">
              <Demo.Icon />
            </V1.Grid>
            <p data-padding="x">Lorem ipsun dolor sit amet </p>
            <V1.Grid as="div" data-place-content="center">
              <Demo.Icon />
            </V1.Grid>
          </V1.Grid>

          <V1.Grid as="form" onSubmit={e => console.log({ e })}>
            <V1.Grid as="label" htmlFor="input" gridTemplateColumns="1fr 48px">
              <input
                placeholder="Your thoughts..."
                type="text"
                id="input"
                data-border="outset"
                data-padding="x"
              />
              <V1.Grid as="div" data-place-content="center">
                <Demo.Icon />
              </V1.Grid>
            </V1.Grid>
          </V1.Grid>
        </V1.Grid>

        <Demo.Spacing />

        <V1.Row as="div" alignItems="center" border="outset" padding="x">
          <V1.Col as="div" data-fit="width">
            <Demo.Icon />
          </V1.Col>
          <p data-padding="x" data-flex-grow="">
            Lorem ipsun dolor sit amet{' '}
          </p>
          <V1.Col as="div" data-fit="width">
            <Demo.Icon />
          </V1.Col>
        </V1.Row>

        <Demo.Spacing />

        <V1.Row as="div" gap="2em">
          <V1.Row
            as="div"
            gap="1em"
            border="inset"
            DANGEROUS={{
              flexGrow: 1,
            }}
            padding="xy"
          >
            <Demo.Icon />
            <Demo.Icon />
            <Demo.Icon data-m-auto="l" />
          </V1.Row>
          <V1.Row
            as="div"
            gap="1em"
            border="inset"
            DANGEROUS={{
              flexGrow: 1,
            }}
            padding="xy"
          >
            <Demo.Icon />
            <Demo.Icon />
            <Demo.Icon data-m-auto="r" />
            <Demo.Icon />
          </V1.Row>

          <V1.Row
            as="div"
            gap="1em"
            border="inset"
            DANGEROUS={{
              flexGrow: 1,
            }}
            padding="xy"
          >
            <Demo.Icon data-m-auto="r" />
            <Demo.Icon />
            <Demo.Icon />
          </V1.Row>
        </V1.Row>

        <Demo.Spacing />

        <V1.Row as="div" gap="2em">
          <V1.Col
            as="div"
            gap=".3em"
            border="inset"
            DANGEROUS={{
              minHeight: '90px',
              flexGrow: 1,
            }}
            padding="xy"
          >
            <Demo.Icon />
            <Demo.Icon />
            <Demo.Icon data-m-auto="t" />
          </V1.Col>

          <V1.Col
            as="div"
            gap=".3em"
            border="inset"
            DANGEROUS={{
              minHeight: '90px',
              flexGrow: 1,
            }}
            padding="xy"
          >
            <Demo.Icon data-m-auto="b" />
            <Demo.Icon />
            <Demo.Icon />
          </V1.Col>
        </V1.Row>
        <Demo.Spacing />

        <V1.Grid as="div" size="200px" gap="2em">
          <V1.Row
            as="div"
            border="inset"
            ratio="landscape"
            data-place-items="center"
            data-place-content="center"
          >
            <Demo.Icon />
          </V1.Row>
          <V1.Row
            as="div"
            border="inset"
            ratio="landscape"
            data-place-items="center"
            data-place-content="center"
          >
            <Demo.Icon />
          </V1.Row>
          <V1.Row
            as="div"
            border="inset"
            ratio="landscape"
            data-place-items="center"
            data-place-content="center"
          >
            <Demo.Icon />
          </V1.Row>
          <V1.Row
            as="div"
            border="inset"
            ratio="landscape"
            data-place-items="center"
            data-place-content="center"
          >
            <Demo.Icon />
          </V1.Row>
        </V1.Grid>

        <Demo.Spacing />

        <V1.Grid as="div" size="200px" gap="2em">
          <V1.Row
            as="div"
            border="inset"
            ratio="portrait"
            data-place-items="center"
            data-place-content="center"
          >
            <Demo.Icon />
          </V1.Row>
          <V1.Row
            as="div"
            border="inset"
            ratio="portrait"
            data-place-items="center"
            data-place-content="center"
          >
            <Demo.Icon />
          </V1.Row>
          <V1.Row
            as="div"
            border="inset"
            ratio="portrait"
            data-place-items="center"
            data-place-content="center"
          >
            <Demo.Icon />
          </V1.Row>
          <V1.Row
            as="div"
            border="inset"
            ratio="portrait"
            data-place-items="center"
            data-place-content="center"
          >
            <Demo.Icon />
          </V1.Row>
        </V1.Grid>
      </main>
    </Fragment>
  )
}

export default App

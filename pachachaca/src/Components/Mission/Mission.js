import 'semantic-ui-css/semantic.min.css'

import _ from 'lodash'
import React, { Component } from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'


const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}

const LeftImage = () => (
  <Image
    floated='left'
    size='medium'
    src='/Team_Lies.jpg'
    style={{ margin: '8em 2em 2em -10em' }}
  />
)

const RightImage = () => (
  <Image
    floated='right'
    size='medium'
    src='/Team_Pavel.jpg'
    style={{ margin: '18em -4em 2em 2em' }}
  />
)

const Paragraph1 = () => (
  <p>
    {[
      'Pachachaca is an organization that provides care for orphaned children and children in situations of social',
      'of social risk who cannot live at home due to neglect, domestic violence and abuse. In addition, Pachachaca ',
      'aims to be an active organization within the community by opening its doors and organizing different  ',
      'activities, both for children and families. Finally, Pachachaca strives as much as possible to be self-sustainable by  ',
      'developing small-scale food projects and the (re) use of water and energy, as well as the adequate treatment of solid waste. ',
      'Pachachaca is a place where children receive attention and care. One of our purposes is to stimulate their potential by ',
      'developing different skills in areas such as friendship, sharing, participation, patience, and different skills in areas such as',
      'friendship, sharing, asking others, taking initiative, following directions, staying focused on tasks. , accepting differences,',
      'active listening, recognizing the skills and qualities of others, positive communication and interaction, having a social and',
      'environmental conscience. All these qualities are stimulated in music, video and theater workshops which are given by',
      'professionals with many years of experience in the field of children homes.'
    ].join('')}
  </p>
)

const Paragraph2 = () => (
  <p>
    {[
      'Create opportunities for children to develop their skills and talents to become healthy, independent adults who care about society.  ',
      
    ].join('')}
  </p>
)

const Paragraph3 = () => (
  <p>
    {[
      'We seek to contribute to the integral development of children and their families in our environment.',
      'We know that changing the world is a utopian idea, but at least we want to contribute to making it less negative.'
      
    ].join('')}
  </p>
)



export default class Mission extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state

    return (
      <div>
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        <style>
          {`
          html, body {
            background: #fff;
          }
        `}
        </style>

        <Container text style={{ marginTop: '2em' }}>
        {/* <Header as='h1'>About us</Header> */}
          {/* <p>
            This example shows how to use lazy loaded images, a sticky menu, and a simple text
            container
          </p> */}
        </Container>
        
        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              
              <Menu.Item>
                <Image size='mini' src='/logo.png' />
              </Menu.Item>
              <Menu.Item header>About us</Menu.Item>
              {/* <Menu.Item as='a'>Blog</Menu.Item>
              <Menu.Item as='a'>Articles</Menu.Item> */}

              <Menu.Menu position='right'>
                <Dropdown text='Dropdown' pointing className='link item'>
                  <Dropdown.Menu>
            <Dropdown.Item href='Home'>Home page</Dropdown.Item>
                    <Dropdown.Item href='Photos'>Photos</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item href='Photos'>Photos</Dropdown.Item>
                        <Dropdown.Item href='Newsletters'>News Letters</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item href='Donate'>Donate</Dropdown.Item>
                  </Dropdown.Menu>
                  
                </Dropdown>
                
              </Menu.Menu>
              
            </Container>
          </Menu>
        </Visibility>
        
        <Container text>
          {_.times(1, (i) => (
            <Paragraph1 key={i} />
          ))}

          {/* Example with overlay menu is more complex, SUI simply clones all elements inside, but we should use a
              different approach.
              An empty Visibility element controls the need to change the fixing of element below, it also uses height
              and width params received from its ref for correct display.
            */}
          <Visibility
            offset={80}
            once={false}
            onTopPassed={this.stickOverlay}
            onTopVisible={this.unStickOverlay}
            style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
          />
            
          <div ref={this.handleOverlayRef} style={overlayFixed ? fixedOverlayStyle : overlayStyle}>
            <Menu
              icon='labeled'
              style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              vertical
            >
              <Menu.Item href='https://twitter.com/i/flow/signup'>
                <Icon name='twitter' />
                Twitter 
              </Menu.Item>

              <Menu.Item href='https://www.facebook.com/groups/1103035913074269'>
                <Icon name='facebook' />
                Share
              </Menu.Item>

              <Menu.Item href='https://www.instagram.com/'>
                <Icon name='mail' />
                Email
              </Menu.Item>
            </Menu>
          </div>

          {/* {_.times(1, (i) => (
            <Paragraph key={i} />
          ))}
          <LeftImage /> */}

          {/* <Paragraph />
          <RightImage /> */}
          <br/>
          <Menu.Item header><b>Mission</b><hr/></Menu.Item>
          {_.times(1, (i) => (
            <Paragraph2 key={i} />
          ))}
          <LeftImage />
          <br/><br/>  
          <Menu.Item header><b>Vision</b><hr/></Menu.Item>
          
          <Paragraph3 />
          <br/><br/><br/>
          <RightImage />
            <br/><br/> <br/><br/> <br/> <br/>
            <h6><b>Over de regio<hr/></b></h6>
            <p>
            Het project Pachachaca, dat door Yoreem wordt ondersteund, heeft haar basis in het plaatsje Calca, 
            hoofdstad van de gelijknamige provincie, in de regio Cusco. De provincie Calca telt circa 65.000 inwoners. 
            Ondanks de fraaie ligging, de vele natuurlijke bronnen en de levendige cultuur, heerst er veel armoede, 
            met alle sociale gevolgen van dien: een groot aantal kinderen groeit op in een instabiele en onveilige 
            thuissituatie. Een aantal van hen kan dan ook niet thuis wonen. Degenen die wel thuis opgroeien, ondervinden 
            in veel gevallen geweld of leven in een staat van verwaarlozing.Begeleiding van buitenaf bestaat niet voor 
            deze gezinnen. De kinderen worden vaak aan hun lot overgelaten. Armoede: vergelijkbaar met Congo en Bangladesh. 
            De cijfers spreken boekdelen: 68,5% van de bevolking van de provincie Calca kent armoede, 37,1% leeft zelfs in 
            extreme armoede. In de nabijgelegen gemeenschappen in de aangrenzende provincie Lares, zijn de cijfers nog 
            dramatischer: 89,8% leeft in armoede en 63,2% in extreme armoede. De provincie Calca kent een Human Development 
            Index van 0,55. het analfabetisme onder mannen is 12,5 procent, onder vrouwen is dit zelfs 31,7 procent. Ruim 55 
            procent van de kinderen in Calca volgt alleen basisonderwijs. Bijna 42 procent van de kinderen in Calca is ondervoed. 
            68,9 Procent van de vrouwen in Peru heeft te maken gehad met fysiek of seksueel geweld.
            </p>

            <h6><b>Pachachaca<hr/></b></h6>
            <p>
            Het project Pachachaca is in 2006 opgezet door een Nederlands echtpaar als kindertehuis. In juli 2016 is de leiding 
            overgedragen aan het Nederlands-Peruaanse echtpaar Liesbeth Kerstens en Pavel Marmanillo. Beiden met een grote 
            internationale ervaring in het begeleiden van mensen in moeilijke omstandigheden. Zij bieden warmte, structuur, 
            rust en professionele begeleiding. Zij hebben geconstateerd dat de vraag om plaatsing in het gezinshuis door de 
            kinderrechter zo groot is, dat daaraan niet voldaan kan worden. Er wordt nu dan ook stevig ingezet op ambulante 
            begeleiding ter preventie en om situaties duurzaam te verbeteren en de familierelaties en –verantwoordelijkheden 
            zoveel mogelijk zichtbaar te maken en houden. 

            De volgende programmalijnen zijn geformuleerd:
            </p>

            <h6><b>1) Pachachaca gezinshuis<hr/></b></h6>
            <p>
            Kinderen die thuis echt niet meer veilig zijn, worden door de kinderrechter uit huis geplaatst. Helaas zijn kinderen 
            die in Peru in een tehuis opgroeien over het algemeen slecht af. Pachachaca wil laten zien dat het anders kan. 
            De kinderen krijgen een deskundige begeleiding in een warm en veilig pedagogisch klimaat, waarbij veel aandacht is 
            voor de individuele ontwikkeling en het opdoen van allerlei vaardigheden die helpen om later een zelfstandig bestaan 
            op te bouwen. Daarnaast is er veel oog voor de relatie met de omgeving. Op allerlei manieren worden de kinderen 
            gestimuleerd het contact met hun familie en de gemeenschap te onderhouden en om zich in te zetten voor hun omgeving. 
            Het doel is uiteindelijk dat de kinderen van Pachachaca uitgroeien tot zelfstandige volwassenen die hun weg vinden 
            in de Peruaanse maatschappij.
            </p>

            <h6><b>2) Gemeenschapshuis<hr/></b></h6>
            <p>
            Elke zaterdag opent Pachachaca haar deuren voor 50 kinderen uit de buurt. In de zomervakantie (in januari/februari, 
            vanwege de ligging van Peru op het Zuidelijk halfrond) nemen jaarlijks 80 kinderen actief deel aan workshops. Vaak 
            kunnen de kinderen overdag niet thuis terecht en hangen zij zonder begeleiding op straat rond of zijn zij gedwongen 
            te werken om een bijdrage te leveren aan het gezinsinkomen. Pachachaca biedt deze kinderen een plek waar zij zich 
            veilig voelen, kunnen spelen en worden begeleid bij hun ontwikkeling. 20 kinderen worden bovendien dagelijks intensief 
            begeleid bij hun huiswerk en nemen deel aan workshops gericht op de ontwikkeling van sociale vaardigheden en participatie 
            in de buurt.
            </p>

            <h6><b>3) Ambulante hulpverlening en activiteiten in de gemeenschap<hr/></b></h6>
            <p>
            Naast activiteiten voor kinderen uit de buurt, zullen de ouders actief worden begeleid bij de opvoeding van hun kinderen 
            en worden betrokken bij de activiteiten van Pachachaca. De 15 meest kwetsbare gezinnen uit de buurt, zo’n 60-75 personen 
            in totaal, worden intensief begeleid door een ervaren psychologe en een sociaal werkster die bekend zijn met de omgeving. 
            Pachachaca wordt daarbij op afstand gecoacht door de Nederlandse organisatie TriviumLindenhof, expert op het vlak van 
            opvang en ambulante begeleiding. Ook zet Pachachaca zich in voor de inwoners uit de buurt en omliggende gemeenschappen 
            in het algemeen. Met de kinderen van Pachachaca en bewoners van de gemeenschappen waar zij zijn geboren worden daarom 
            vier keer per jaar activiteiten georganiseerd ter bevordering van de ontwikkeling van deze gemeenschappen, waarbij de 
            kinderen een actieve rol krijgen in de organisatie en uitvoering. Op deze manier levert Pachachaca niet alleen een 
            bijdrage aan de levensomstandigheden in de buurt of in de desbetreffende gemeenschappen, maar wordt bovendien de band 
            van de kinderen met hun achtergrond en familie hersteld en de sociale betrokkenheid van de kinderen vergroot.
            </p>

            <h6><b>Kleine projecten in de regio Calca – kleine bedragen – groot verschil<hr/></b></h6>
            <p>
            Yoreem is in 2014 in contact gekomen met Ortwin Hutten, docent aan de Hogeschool Utrecht, die veelvuldig reist naar Peru, 
            waar hij jarenlang actief betrokken is geweest bij onderwijskundige ontwikkelingsprojecten. Peru is zijn tweede vaderland 
            geworden en Ortwin beschikt daar over een relevant netwerk. Sinds 2015 steunt Yoreem hem in zijn streven om met relatief 
            weinig geld een groot verschil te maken voor individuele gezinnen of personen in de hooggelegen gebieden rond Calca. 
            Zo worden kinderen/jongeren ondersteund in hun opleiding en alleenstaande ouders geholpen bij het vinden van werk en goede 
            kinderopvang. 
            </p>
          {/* {_.times(1, (i) => (
            <Paragraph3 key={i} />
          ))} */}
        </Container>

        <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
          <Container textAlign='center'>
            <Grid columns={4} divided stackable inverted>
              <Grid.Row>
                <Grid.Column>
                  <Header inverted as='h4' content='Pages' />
                  <List link inverted>
                    <List.Item as='a'href='Home'>Homepage</List.Item>
                    <List.Item as='a' href='Donate'>Donate</List.Item>
                    <List.Item as='a'href='Newsletters'>News Letters</List.Item>
                    <List.Item as='a' href='Photos'>Photos</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Informations' />
                  <List link inverted>
                    <List.Item as='a' href='Programm'>Program</List.Item>
                    <List.Item as='a' href='#'>Map</List.Item>
                    <List.Item as='a' href='#'>Contact</List.Item>
                    <List.Item as='a' href='Mission'>About</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Addresses' />
                  <List link inverted>
                    <List.Item as='a' href='#'>facebook address</List.Item>
                    <List.Item as='a' href='#'>Instegram address</List.Item>
                    <List.Item as='a' href='#'>Twitter address</List.Item>
                    <List.Item as='a' href='#'>Instegram address</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Our goal is' />
                  <p>
                  We seek to contribute to the integral development of children and<br/> their families in our environment.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider inverted section />
            <Image src='/logo.png' centered size='mini' />
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Map
              </List.Item>
              <List.Item as='a' href='#'>
                Contact Us
              </List.Item>
              <List.Item as='a' href='#'>
                Terms and Conditions
              </List.Item>
              <List.Item as='a' href='#'>
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}
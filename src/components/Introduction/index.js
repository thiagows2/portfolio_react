import Heading from '../Heading'
import Link from '../Link'

import './styles.css'

const Introduction = () => (
  <section>
    <Heading>
      Olá, meu nome é Thiago <br />
      Ando construindo alguns projetos web <br />
      E este, é um deles...<br />
      Seja bem-vindo!
    </Heading>
    <div className="introduction__description">
      <p>
        Sou estagiário em desenvolvimento web full stack<br />
        tenho experiência com Rails e VueJS.
      </p>
    </div>
    <Link title="Contato" link="mailto:thiagomarques408@gmail.com"/>
  </section>
)

export default Introduction
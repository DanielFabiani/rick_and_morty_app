import styled from 'styled-components';

  const MainContainer = styled.div`
    > h2 {
      color: #fff;
    }
  `;

const About = () => {

  return (
    <MainContainer>
      <h2>Pagina About: un poco sobre la App como la hice y un poco de mi</h2>
    </MainContainer>
  )
}

export default About;
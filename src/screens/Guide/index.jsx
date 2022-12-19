import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../misc/Colors";
import { PrettyTitle } from "../../molecules";
import { BigTitle } from "../../atom";

function Guide() {
  return (
    <ScrollView style={styles.container}>
      <BigTitle style={{ marginTop: 20 }}>Spells</BigTitle>
      <Text style={styles.p}>
        Uma magia é um efeito mágico discreto, uma formação simples de energias
        mágicas que preenche o multiverso em algo específico, uma expressão
        limitada. Conjurando uma magia, o personagem colhe cuidadosamente
        vertentes invisíveis da magia bruta que preenche o mundo, moldando-as em
        um padrão particular, deixando-as em uma vibração específica e, então,
        as liberando para desencadear o efeito desejado - em muitos casos, tudo
        em uma questão de segundos.
      </Text>
      <Text style={styles.p}>
        Magias podem ser ferramentas versáteis, armas ou proteções. Elas podem
        causar dano ou desfazê-lo, impor ou remover condições, drenar energia
        vital ou restaurar a vida onde havia morte. Incontáveis magias foram
        criadas através do curso da história do multiverso e muitas delas caíram
        em esquecimento.
      </Text>
      <Text style={styles.p}>
        Algumas ainda resistem em livros de magias bem velhos, em antigas ruínas
        ou presas na mente de deuses mortos. Ou elas podem ser reinventadas
        algum dia por um personagem que tenha acumulado poder e sabedoria
        suficiente para tanto.
      </Text>
      <PrettyTitle>Espaços de magia</PrettyTitle>
      <Text style={styles.p}>
        Independentemente de quantas magias alguém conheça ou prepare, ele ou
        ela pode apenas conjurar um número limitado de magias antes de
        descansar. Manipulando a trama mágica e canalizando sua energia em uma
        simples magia é fisicamente e mentalmente cansativo, e magias de níveis
        superiores são ainda mais. Assim, cada descrição das classes
        conjuradoras (exceto a do bruxo) inclui uma tabela mostrando quantas
        magias de cada nível o personagem pode usar, de acordo com o nível do
        personagem
      </Text>
      <PrettyTitle>Truques</PrettyTitle>
      <Text style={styles.p}>
        Um truque é uma magia que pode ser conjurada sem limite, sem precisar
        usar o espaço de uma magia e sem precisar ser preparada. A prática
        repetida fixou a magia na mente de quem pode conjurá-lo e infundiu a
        magia necessária para produzir seu efeito repetidas vezes. O nível de
        magia de um truque é 0.
      </Text>
      <PrettyTitle>Rituais</PrettyTitle>
      <Text style={styles.p}>
        Certas magias têm uma marcação especial: ritual. A magia pode ser
        conjurada seguindo as regras normais para ser conjurada ou ela pode ser
        conjurada como um ritual. A versão em ritual da magia demanda 10 minutos
        a mais do que o normal para ser conjurada. O ritual não gasta o espaço
        de uma magia, logo ele não pode ser conjurado como uma magia de nível
        superior.
      </Text>
      <Text style={styles.p}>
        Para conjurar a magia como um ritual é preciso ter uma característica
        que forneça habilidade para tal. O clérigo e o druida, por exemplo,
        possuem tal característica. O conjurador também deve ter a magia
        preparada ou tê-la na sua lista de magias conhecidas, a menos que a
        característica para o uso do ritual do personagem especifique o
        contrário, tal como acontece com o mago.
      </Text>
      <PrettyTitle>Alvos</PrettyTitle>
      <Text style={styles.p}>
        Uma magia típica requer que você escolha um ou mais alvos para serem
        afetados por ela. A descrição da magia informa a você se ela tem como
        alvo criaturas, objetos ou um ponto de origem para uma área de efeito
        (descrita abaixo). A menos que uma magia tenha efeito perceptível, uma
        criatura pode não saber se foi alvo de uma magia. Um efeito, como luzes
        crepitantes é bem obvio, mas um efeito mais sutil, como uma tentativa de
        ler os pensamentos de uma criatura, normalmente passa despercebido, a
        menos que a magia diga o contrário.
      </Text>
      <PrettyTitle>Um caminho livre até o alvo</PrettyTitle>
      <Text style={styles.p}>
        Para mirar em um alvo, você deve ter o caminho livre, logo não pode
        estar por de trás de uma cobertura total. Se você definir uma área de
        efeito a partir de um ponto que não possa ver e que seja uma obstrução,
        como uma parede, entre você e o alvo, o ponto de origem tem início no
        ponto mais próximo da obstrução.
      </Text>
      <PrettyTitle>Duração da magia</PrettyTitle>
      <Text style={styles.p}>
        A duração da magia é a extensão de tempo que uma magia persiste. Uma
        duração pode ser expressa em rodadas, minutos, horas ou mesmo em anos.
        Algumas magias especificam que seus efeitos duram até a magia ser
        dissipada ou destruída.
      </Text>
      <PrettyTitle>Concentração</PrettyTitle>
      <Text style={styles.p}>
        Algumas magias requerem que você se mantenha concentrado com a
        finalidade de mantê-la ativa. Se você perder a concentração, a magia se
        encerra.
      </Text>
      <Text style={styles.p}>
        Se uma magia precisa ser mantida com concentração, esse detalhe aparece
        na descrição da própria magia em “Duração”. Também é descrito na própria
        magia quanto tempo você pode manter sua concentração nela. Você pode
        encerrar a concentração em qualquer momento (nenhuma ação é exigida).
      </Text>
      <Text style={styles.p}>
        Atividades normais, como mover e atacar, não interferem na concentração.
        Os seguintes fatores podem quebrar a concentração:
      </Text>
      <Text style={styles.subtitle}>
        Conjurar outra magia que exige concentração
      </Text>
      <Text style={styles.p}>
        Você perde a concentração se conjurar outra magia que exige
        concentração. Você não pode se concentrar em duas magias de uma só vez.
      </Text>
      <Text style={styles.subtitle}>Sofrer dano</Text>
      <Text style={styles.p}>
        Sempre que você sofrer dano enquanto estiver se concentrando em uma
        magia, você deve fazer um teste de resistência de Constituição para
        manter sua concentração. A CD é igual a 10 ou metade do dano recebido, o
        que for maior. Se você sofrer o dano de múltiplas origens, como uma
        flecha e um sopro de dragão, você deve fazer um teste de resistência
        para cada origem do dano.
      </Text>
      <Text style={styles.subtitle}>Ficar incapacitado ou morto</Text>
      <Text style={styles.p}>
        Você perde a concentração da magia se ficar incapacitado ou se morrer. O
        Mestre também pode decidir que algum fenômeno ambiental, como o impacto
        de uma onda sobre você enquanto está em um navio enfrentando uma
        tempestade, demande um sucesso em um teste de resistência de
        Constituição com CD 10, para poder manter a concentração na magia.
      </Text>
      <PrettyTitle>Os componentes das magias</PrettyTitle>
      <Text style={styles.p}>
        Os componentes de uma magia são requisitos físicos que você deve possuir
        para conjurar a magia. Cada descrição de magia indica se seu componente
        é verbal (V), somático (S) ou material (M). Se você não dispor de um ou
        mais dos componentes da magia, você fica incapaz de conjurá-la.
      </Text>
      <Text style={styles.subtitle}>Verbal (V)</Text>
      <Text style={styles.p}>
        A maioria das magias exige a entoação de palavras místicas. As palavras
        em si não são a fonte do poder da magia, em vez disso, a combinação
        particular de sons, com o específico timbre e entonação, põe o filamento
        da magia em ação. Então, um personagem que está amordaçado ou em uma
        área de silêncio, como uma criada pela magia silêncio, não pode conjurar
        uma magia com o componente verbal.
      </Text>
      <Text style={styles.subtitle}>Somático (S)</Text>
      <Text style={styles.p}>
        Gestos para conjurar magias podem incluir uma forte gesticulação ou um
        intricado conjunto de gestos. Se uma magia requer um componente
        somático, é necessário ter livre ao menos uma das mãos para executar
        esses gestos.
      </Text>
      <Text style={styles.subtitle}>Material (M)</Text>
      <Text style={styles.p}>
        Conjurar algumas magias requer objetos particulares, especificados em
        parênteses na área de componentes. Um personagem pode usar uma "bolsa de
        componentes" ou um "foco de conjuração" (descritos no capítulo 5) no
        lugar dos componentes específicos para uma magia. Mas se um custo é
        indicado para um componente, um personagem deve ter esse componente
        específico antes de poder conjurar a magia.
      </Text>
      <PrettyTitle>Tempo de conjuração das magias</PrettyTitle>
      <Text style={styles.p}>
        Muitas magias requerem uma simples ação para serem conjuradas, mas
        algumas magias requerem ações bônus, uma reação, ou muito mais tempo
        para ser conjurada.
      </Text>
      <PrettyTitle>Ação bônus</PrettyTitle>
      <Text style={styles.p}>
        Uma magia conjurada com uma ação bônus é especialmente veloz. Você deve
        usar uma ação bônus no seu turno para conjurar a magia, presumindo que
        já não tenha feito uso da ação bônus nesse turno. Você não pode conjurar
        outra magia durante o mesmo turno, exceto se for um truque que tenha
        tempo de conjuração de 1 ação.
      </Text>
      <PrettyTitle>Reações</PrettyTitle>
      <Text style={styles.p}>
        Algumas magias podem ser conjuradas como uma reação. Essas magias levam
        uma fração de segundo para virem à tona e são conjuradas em resposta a
        algum evento. Se uma magia pode ser conjurada como uma reação, a
        descrição da magia diz exatamente quando você pode fazer isto.
      </Text>
      <PrettyTitle>Tempos de conjuração maiores</PrettyTitle>
      <Text style={styles.p}>
        Certas magias (incluindo magias conjuradas como rituais) requerem mais
        tempo para ser conjuradas: minutos ou mesmo horas. Quando você conjura
        uma magia com um tempo para conjurar magia maior que uma ação simples ou
        uma reação, você deve gastar sua ação a cada turno que estiver
        conjurando a magia e precisa manter a concentração enquanto o faz
        (“Concentração”). Se a sua concentração for quebrada, a magia falha, mas
        você não gasta o espaço da magia. Se você tentar conjurar a magia de
        novo, deve fazer do início.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
  },
  p: {
    backgroundColor: colors.white,
    color: colors.dark_gray,
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    marginTop: 10,
    backgroundColor: colors.white,
    color: colors.dark_gray,
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    backgroundColor: colors.white,
    color: colors.dark_gray,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "center",
  },
});

export { Guide };

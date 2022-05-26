import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  TransactionList,
  Title,
  LogoutButton,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: number;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: 1,
      type: "positive",
      title: "Desenvolvimeto de site",
      amount: "R$ 1.400,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "24/05/2022",
    },
    {
      id: 2,
      type: "negative",
      title: "Desenvolvimeto de site",
      amount: "R$ 1.400,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "24/05/2022",
    },
    {
      id: 3,
      type: "positive",
      title: "Desenvolvimeto mobile",
      amount: "R$ 9.400,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "30/05/2022",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/54183047?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Junior</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de maio"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.400,00"
          lastTransaction="Última entrada dia 19 de maio"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.000,00"
          lastTransaction="Última entrada dia 25 de maio"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}

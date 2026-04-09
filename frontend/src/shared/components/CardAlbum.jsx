import { Card, Image, Text, Badge, Group } from "@mantine/core";

export default function CardAlbum({ AlbumTitulo, temporada, AlbumArtistas }) {
  /*{
    "id_album": 1,
    "id_albumSpotify": "1JqY02pklBKhzoBADtmFlA",
    "AlbumTitulo": "The Fame Monster",
    "temporada": 1,
    "id_user_indicado_por": 8,
    "AlbumArtistas": "Lady Gaga",
    "data_inicio_avaliacao": null,
    "data_fim_avaliacao": null,
    "avaliado": 1
  } */
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        maxWidth: "400px",
        maxHeight: "500px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Card.Section>
        <Image src={"src/modules/capaTeste.jpg"} height={200} alt="" />
      </Card.Section>

      <Group mt="md" mb="xs">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            justifyContent: "space-between",
            flex: 1,
            marginTop: "auto",
          }}
        >
          <Text
            fw={500}
            style={{
              textWrap: "auto",
              textAlign: "left",
            }}
          >
            {AlbumTitulo}
          </Text>
          <Badge color="pink" style={{ padding: "10px", minWidth: "50px" }}>
            {temporada}
          </Badge>
        </div>
      </Group>

      <div>
        <Text
          size="sm"
          c="dimmed"
          style={{
            textWrap: "auto",
            textAlign: "left",
          }}
        >
          {AlbumArtistas}
        </Text>
      </div>
    </Card>
  );
}

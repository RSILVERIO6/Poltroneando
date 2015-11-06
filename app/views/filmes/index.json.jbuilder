json.array!(@filmes) do |filme|
  json.extract! filme, :id, :titulo, :ano, :sinopse, :duracao
  json.url filme_url(filme, format: :json)
end

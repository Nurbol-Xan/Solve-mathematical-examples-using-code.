# Logika orqaliy yechganda.
def yaqin_1(x, y)
    n = 100 - x
    m = 100 - y
  if n > m
    y
  else
    x
  end
end

# Oson yo'l bilan yechgan.
def yaqin_2(x, y)
  [x, y].sort.first
end

puts yaqin_1(1, 2)

puts yaqin_2(1, 2)
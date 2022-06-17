# Logika orqaliy yechganda.
def sonlar_orasida(x, y)
  if y >= 40 && y <= 60 && x >= 40 && x <= 60 || x >= 70 && x <= 100 && y >= 70 && y <= 100 
    true
  else
    false
  end
end

# Oson yo'l bilan yechgan.
def sonlar_orasida_2(x, y)
  x.between?(40, 60) && y.between?(40, 60) || y.between?(70, 100) && x.between?(70, 100)
end

puts sonlar_orasida(44, 6)
puts sonlar_orasida_2(50, 99)
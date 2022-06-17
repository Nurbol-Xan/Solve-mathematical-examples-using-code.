# Logika orqaliy yechganda.
def ohirgi_r(x, y, z)
  x % 10 == y % 10 && y % 10 == z % 10
end

# Oson yo'l bilan yechgan.
def ohirgi_r_2(x, y, z)
  [x, y, z].map { |i| i % 10 }.uniq.size == 1
end

puts ohirgi_r(15, 25, 35)
puts ohirgi_r_2(15, 25, 35)

# Logika orqaliy yechganda.
def harf_bor(satr, harf)
    n = 0
    for i in 0..satr.length  do
        if satr[i] == harf
            n += 1
        end
    end
    
    if n >= 2 && n <= 4
        true
    else
        false
    end
end

# Oson yo'l bilan yechgan.
def harf_bor_2(satr, harf)
    satr.count(harf).between?(2, 4)
end

puts harf_bor("Javascript", "a")
puts harf_bor_2("Javascript", "a")
file = open('./params/rest/diff.txt')
diff = []
for line in file:
  diff.append(line.strip('\n'))


print(diff)
print('---------------------')

origin = []
file = open('./params/rest/origin.txt')
for line in file:
  print(line.strip('\n') in diff)
  # origin.append()

# print(origin)

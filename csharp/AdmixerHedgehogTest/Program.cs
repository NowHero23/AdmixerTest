int getMinimumMeetings(int[] startPupulation, int color)
{
    var sum = startPupulation.Sum();
    if (startPupulation[0] == sum || startPupulation[1] == sum || startPupulation[2] == sum)
        return -1;

    var history = new HashSet<string>();
    var step = new HashSet<string>();
    var stepsCount = 0;
    var nextStep = new HashSet<string>() { string.Join("/", startPupulation) };

    int[] selected = new int[3];
    while (nextStep.Count != 0)
    {
        step = nextStep.ToHashSet();
        nextStep.Clear();

        for (int i = 0; i < step.Count; i++)
        {
            selected = step.ElementAt(i).Split("/", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();

            switch (color)
            {
                case 0:
                    if (selected[1] == selected[2])
                        return stepsCount + selected[1];
                    break;
                case 1:
                    if (selected[0] == selected[2])
                        return stepsCount + selected[0];
                    break;
                case 2:
                    if (selected[0] == selected[1])
                        return stepsCount + selected[0];
                    break;
                default:
                    break;
            }

            if (selected[0] != 0 && selected[1] != 0)
            {
                int[] newStr = [selected[0] - 1, selected[1] - 1, selected[2] + 2];
                if (history.Add(string.Join("/", newStr)))
                    nextStep.Add(string.Join("/", newStr));
            }
            if (selected[0] != 0 && selected[2] != 0)
            {
                int[] newStr = [selected[0] - 1, selected[1] + 2, selected[2] - 1];
                if (history.Add(string.Join("/", newStr)))
                    nextStep.Add(string.Join("/", newStr));
            }
            if (selected[1] != 0 && selected[2] != 0)
            {
                int[] newStr = [selected[0] + 2, selected[1] - 1, selected[2] - 1];
                if (history.Add(string.Join("/", newStr)))
                    nextStep.Add(string.Join("/", newStr));
            }
        }

        stepsCount++;
    }

    return -1;
}

List<int> startstartPupulation = new List<int>();

bool isParsed = false;
int number = -1;

for (int i = 0; i < 3; i++)
{
    do
    {
        isParsed = int.TryParse(Console.ReadLine(), out number);
    }
    while (isParsed && number > -1);
    startstartPupulation.Add(number);
}

number = -1;
isParsed = false;

do
{
    isParsed = int.TryParse(Console.ReadLine(), out number);
}
while (isParsed && number > -1 && number < 3);


Console.WriteLine(getMinimumMeetings(startstartPupulation.ToArray(), number));
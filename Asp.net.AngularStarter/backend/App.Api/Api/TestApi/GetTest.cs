using App.Api.validation;
using App.Data;
using App.Data.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace App.Api.Api.TestApi;

public static class GetTest
{
    public static async Task<IResult> HandleGetTest([FromBody] GetTestDto getTest, ApplicationDataContext context)
    {
        var model = await context.Models.FindAsync(getTest.Id);
        if (model == null)
        {
            return Results.Problem("Model not found", statusCode: StatusCodes.Status404NotFound);
        }

        return Results.Ok(new GetTestResultDto
        {
            Id = model.Id,
            Name = model.Name
        });
    }

    public class GetTestDto
    {
        public required int Id { get; set; }
        public required string Name { get; set; }
    }

    public class GetTestResultDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
    }

    public static Dictionary<string, string[]> ValidateGetTestDto(GetTestDto getTest)
    {
        var errors = new Dictionary<string, string[]>();
    
        if (getTest.Name.Length <= 4)
        {
            errors[nameof(getTest.Name)] = ["Name must be longer than 4 characters."];
        }

        return errors;
    }
}
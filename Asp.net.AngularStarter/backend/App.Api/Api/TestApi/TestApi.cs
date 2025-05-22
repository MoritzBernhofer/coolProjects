using App.Api.validation;
using App.Data;
using App.Data.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace App.Api.Api.TestApi;

public static class TestApi
{
    public static IEndpointRouteBuilder MapTestApi(this IEndpointRouteBuilder app)
    {
        app.MapGet("/test", GetTest.HandleGetTest)
            .AddEndpointFilter(ValidationHelpers.GetEndpointFilter<GetTest.GetTestDto>(GetTest.ValidateGetTestDto))
            .WithName(nameof(GetTest.HandleGetTest))
            .WithDescription("Gets test data")
            .Produces<ValidationProblemDetails>(StatusCodes.Status400BadRequest)
            .Produces<GetTest.GetTestResultDto>(StatusCodes.Status200OK)
            .Produces<ProblemDetails>(StatusCodes.Status404NotFound);

        return app;
    }
}
